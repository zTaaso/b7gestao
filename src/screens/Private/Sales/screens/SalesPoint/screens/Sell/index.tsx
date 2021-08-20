import React from 'react';

import SalesPointCartContainer from './components/CartContainer';
import Router from './Router';

import SellProvider from './context/SellContext';

const SalesPointSell: React.FC = () => (
  <SellProvider>
    <Router />
    <SalesPointCartContainer />
  </SellProvider>
);

export default SalesPointSell;
