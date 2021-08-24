import React, { useContext } from 'react';
import formatToReal from '~/src/util/formatToReal';
import Product from '../types/Product';

interface SellContextTypes {
  addProductItem: (product: Product) => void;
  removeProductItem: (product: Product) => void;
  cartInfo: CartInfo;
  selectedProducts: Product[];
  showCartState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

interface CartInfo {
  productsAmount: number;
  totalPrice: number;
  formattedTotalPrice: string;
}

export const SellContext = React.createContext<SellContextTypes>({} as SellContextTypes);

export const useSellContext: () => SellContextTypes = () => useContext(SellContext);

const SellProvider: React.FC = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = React.useState<Product[]>([]);
  const [cartInfo, setCartInfo] = React.useState<CartInfo>({
    productsAmount: 0,
    totalPrice: 0,
    formattedTotalPrice: '',
  });

  const showCartState = React.useState(true);

  const addProductItem = React.useCallback(
    (receivedProduct: Product) => {
      // verify if product is already selected
      const productExists = selectedProducts.find((product) => product.id === receivedProduct.id);

      if (!productExists) {
        // if product is not selected, merely adds it to selectedProducts array
        setSelectedProducts([...selectedProducts, receivedProduct]);
        return;
      }

      // if product is selected, iterate over selectedProducts array and increase the amount to the respective product
      const newSelectedProducts = selectedProducts.map((product) => {
        if (product.id === receivedProduct.id) {
          return {
            ...product,
            amount: product.amount + 1,
          };
        }

        return product;
      });

      setSelectedProducts(newSelectedProducts);
    },
    [selectedProducts]
  );

  const removeProductItem = React.useCallback(
    (receivedProduct: Product) => {
      // return solely the product which the id is different from the received one

      console.log({ receivedProductName: receivedProduct.name, selectedProducts });

      const newSelectedProducts = selectedProducts.filter((product) => {
        const condition = product.id !== receivedProduct.id;

        return condition;
      });

      console.log({ newSelectedProducts });

      setSelectedProducts(newSelectedProducts);
    },
    [selectedProducts]
  );

  React.useEffect(() => {
    // console.log({ selectedProducts });

    function getAmountInfo() {
      let productsAmount = 0;
      let totalPrice = 0;

      selectedProducts.forEach((product) => {
        productsAmount += product.amount;
        totalPrice += product.price * product.amount;
      });

      const formattedTotalPrice = formatToReal(totalPrice);

      setCartInfo((prevObj) => ({
        ...prevObj,
        productsAmount,
        totalPrice,
        formattedTotalPrice,
      }));
    }

    getAmountInfo(); // update cart info every time selectedProducts change;
  }, [selectedProducts]);

  const state = {
    addProductItem,
    removeProductItem,
    cartInfo,
    selectedProducts,
    showCartState,
  };

  return <SellContext.Provider value={state}>{children}</SellContext.Provider>;
};

export default SellProvider;
