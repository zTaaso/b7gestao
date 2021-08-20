import SalesPointManagementCashControl from '../screens/CashControl';
import SalesPointManagementOpenOrders from '../screens/OpenOrders';
import SalesPointManagementInitial from '../screens/Initial';
import SalesPointManagementClients from '../screens/Clients';
import SalesPointManagementStock from '../screens/Stock';
import SalesPointManagementSales from '../screens/Sales/index';

const routes = [
  {
    name: 'SalesPointManagementInitial',
    component: SalesPointManagementInitial,
  },
  {
    name: 'SalesPointManagementClients',
    component: SalesPointManagementClients,
  },
  {
    name: 'SalesPointManagementCashControl',
    component: SalesPointManagementCashControl,
  },
  {
    name: 'SalesPointManagementStock',
    component: SalesPointManagementStock,
  },
  {
    name: 'SalesPointManagementOpenOrders',
    component: SalesPointManagementOpenOrders,
  },
  {
    name: 'SalesPointManagementSales',
    component: SalesPointManagementSales,
  },
];

export default routes;
