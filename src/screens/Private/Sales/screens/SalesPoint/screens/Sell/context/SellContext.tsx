import React, { useContext } from 'react';
import Product from '../types/Product';

interface SellContextTypes {
  addProductItem: (product: Product) => void;
}

export const SellContext = React.createContext<SellContextTypes>({} as SellContextTypes);

export const useToggleContext = () => useContext(SellContext);

const SellProvider: React.FC = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = React.useState<Product[]>([]);

  const addProductItem = React.useCallback((product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  }, []);

  const state = {
    addProductItem,
  };

  return <SellContext.Provider value={state}>{children}</SellContext.Provider>;
};

export default SellProvider;
