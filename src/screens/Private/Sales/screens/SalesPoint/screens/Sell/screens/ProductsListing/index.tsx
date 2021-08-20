import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';

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
  // irei recuperar o array de produtos de um contexto com base na categoria recebida
  const products: Product[] = [
    { id: 1, name: 'Arroz', price: 'R$10,00', image_url: '' },
    { id: 2, name: 'Feijão', price: 'R$15,00', image_url: '' },
    { id: 3, name: 'Macarrão', price: 'R$10,00', image_url: '' },
  ];

  const route = useRoute() as RouteProp<RouteParams, 'ProductsListing'>;
  const { screenName, category } = route.params;

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
