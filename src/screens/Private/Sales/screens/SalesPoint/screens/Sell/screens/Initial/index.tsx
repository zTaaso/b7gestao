import React from 'react';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import ProductBlock from '../../../../components/ProductBlock';

const SalesPointSellInitial: React.FC = () => (
  <PrivateLayout screenName="Vender" showBackButton={false}>
    <ProductBlock />
  </PrivateLayout>
);

export default SalesPointSellInitial;
