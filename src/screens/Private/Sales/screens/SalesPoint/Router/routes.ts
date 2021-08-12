import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

import SalesPointSell from '../screens/Sell';
import SalesPointRegister from '../screens/Register';
import SalesPointManagement from '../screens/Management';
import SalesPointSettings from '../screens/Settings';

const routes = [
  {
    name: 'SalesPointRegister',
    component: SalesPointRegister,
    title: 'Cadastros',
    icon: { name: 'pluscircleo', Icon: AntDesign },
  },
  {
    name: 'SalesPointManagement',
    component: SalesPointManagement,
    title: 'Gestão',
    icon: { name: 'bar-graph', Icon: Entypo },
  },
  {
    name: 'SalesPointSell',
    component: SalesPointSell,
    title: 'Vender',
    icon: { name: 'tag', Icon: AntDesign },
  },
  {
    name: 'SalesPointSettings',
    component: SalesPointSettings,
    title: 'Ajustes',
    icon: { name: 'settings', Icon: Feather },
  },
];

export default routes;
