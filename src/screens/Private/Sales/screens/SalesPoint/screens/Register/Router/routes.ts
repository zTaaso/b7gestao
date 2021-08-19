import SalesPointRegisterCategories from '../screens/Categories';
import SalesPointRegisterProducts from '../screens/Products';
import SalesPointRegisterInitial from '../screens/Initial';
import SalesPointRegisterClients from '../screens/Clients';
import SalesPointRegisterSellers from '../screens/Sellers';
import SalesPointRegisterModifiers from '../screens/Modifiers';

const routes = [
  {
    name: 'SalesPointRegisterInitial',
    component: SalesPointRegisterInitial,
  },
  {
    name: 'SalesPointRegisterCategories',
    component: SalesPointRegisterCategories,
  },
  {
    name: 'SalesPointRegisterProducts',
    component: SalesPointRegisterProducts,
  },
  {
    name: 'SalesPointRegisterModifiers',
    component: SalesPointRegisterModifiers,
  },
  {
    name: 'SalesPointRegisterClients',
    component: SalesPointRegisterClients,
  },
  {
    name: 'SalesPointRegisterSellers',
    component: SalesPointRegisterSellers,
  },
];

export default routes;
