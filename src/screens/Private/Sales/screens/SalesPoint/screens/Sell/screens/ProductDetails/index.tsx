import React from 'react';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';

import Product from '../../types/Product';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

interface RouteParams extends ParamListBase {
  ProductsDetails: {
    product: Product;
  };
}

const SalesPointSellProductDetails: React.FC = () => {
  const route = useRoute() as RouteProp<RouteParams, 'ProductsDetails'>;
  const { product } = route.params;

  return <PrivateLayout screenName={`Produto: ${product.name}`} />;
};

export default SalesPointSellProductDetails;
