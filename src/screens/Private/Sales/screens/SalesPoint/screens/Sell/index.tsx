import React from 'react';

import SalesPointCartContainer from './components/CartContainer';
import Router from './Router';

const SalesPointSell: React.FC = () => (
  <>
    <Router />
    <SalesPointCartContainer />
  </>
);

export default SalesPointSell;
