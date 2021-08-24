import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import ProductsList from '../../components/ItemsList';
import ProductItem from '../../components/ProductItem';
import Product from '../../types/Product';

interface RouteParams extends ParamListBase {
  ProductsListing: {
    screenName: string;
    category: string;
  };
}

const SalesPointSellProductsListing: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // irei recuperar o array de produtos de um contexto com base na categoria recebida
  const products: Product[] = [
    { id: 1, name: 'Arroz', price: 10, formattedPrice: 'R$10,00', image_url: '', amount: 1 },
    { id: 2, name: 'Feijão', price: 15, formattedPrice: 'R$15,00', image_url: '', amount: 1 },
    { id: 3, name: 'Macarrão', price: 12, formattedPrice: 'R$12,00', image_url: '', amount: 1 },
    { id: 4, name: 'Hambúrguer', price: 12, formattedPrice: 'R$15,00', image_url: '', amount: 1 },
  ];

  const route = useRoute() as RouteProp<RouteParams, 'ProductsListing'>;
  const { screenName, category } = route.params;
  // i will user 'category' to fetch specific data from products

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName={screenName} />;
  }

  return (
    <PrivateLayout screenName={screenName}>
      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.id.toString()} product={product} />
        ))}
      </ProductsList>
    </PrivateLayout>
  );
};

export default SalesPointSellProductsListing;
