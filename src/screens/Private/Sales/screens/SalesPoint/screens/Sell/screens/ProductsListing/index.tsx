import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import ProductsList from '../../components/ItemsList';
import ProductItem from '../../components/ProductItem';

interface RouteParams extends ParamListBase {
  ProductsListing: {
    screenName: string;
    category: string;
  };
}

const SalesPointSellProductsListing: React.FC = () => {
  // irei recuperar o array de produtos de um contexto com base na categoria recebida
  const products = [
    { title: 'Arroz', price: 'R$10,00', children: null },
    { title: 'Feijão', price: 'R$15,00', children: null },
    { title: 'Macarrão', price: 'R$10,00', children: null },
  ];

  const route = useRoute() as RouteProp<RouteParams, 'ProductsListing'>;
  const { screenName, category } = route.params;

  return (
    <PrivateLayout screenName={screenName}>
      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.title} {...product} />
        ))}
      </ProductsList>
    </PrivateLayout>
  );
};

export default SalesPointSellProductsListing;
