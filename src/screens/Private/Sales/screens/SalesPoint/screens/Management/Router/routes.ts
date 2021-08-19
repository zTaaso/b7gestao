import SalesPointSettingsContact from '../screens/Contact';
import SalesPointSettingsHelp from '../screens/Help';
import SalesPointSettingsInitial from '../screens/Initial';
import SalesPointSettingsMarketInfo from '../screens/MarketInfo';
import SalesPointSettingsPreferences from '../screens/Preferences';

const routes = [
  {
    name: 'SalesPointSettingsInitial',
    component: SalesPointSettingsInitial,
  },
  {
    name: 'SalesPointSettingsMarketInfo',
    component: SalesPointSettingsMarketInfo,
  },
  {
    name: 'SalesPointSettingsContact',
    component: SalesPointSettingsContact,
  },
  {
    name: 'SalesPointSettingsPreferences',
    component: SalesPointSettingsPreferences,
  },
  {
    name: 'SalesPointSettingsHelp',
    component: SalesPointSettingsHelp,
  },
];

export default routes;
