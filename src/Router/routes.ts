import InitialHome from '~/src/screens/Home';

import Login from '~/src/screens/Forms/Login';
import RegisterUser from '~/src/screens/Forms/RegisterUser';
import RegisterCompany from '~/src/screens/Forms/RegisterCompany';
import VerifyEmail from '~/src/screens/Forms/VerifyEmail';

import SuccessScreen from '~/src/screens/Forms/SuccessScreen';

import Dashboard from '~/src/screens/Private/Dashboard';

import Chats from '~/src/screens/Private/Messages/screens/Chats';
import ChatMain from '~/src/screens/Private/Messages/screens/Chat';

import Sales from '~/src/screens/Private/Sales';
import SalesReports from '~/src/screens/Private/Sales/screens/Reports';
import SalesContracts from '~/src/screens/Private/Sales/screens/Contracts/index';
import SalesAdditionalOptions from '~/src/screens/Private/Sales/screens/AdditionalOptions/index';
import SalesPoint from '~/src/screens/Private/Sales/screens/SalesPoint/index';
import SalesServiceOrder from '~/src/screens/Private/Sales/screens/ServicesOrder/index';

import Payments from '~/src/screens/Private/Payments';
import PaymentsSchedule from '~/src/screens/Private/Payments/screens/PaymentsSchedule';
import PaymentsDone from '../screens/Private/Payments/screens/PaymentsDone';
import PaymentsReceived from '../screens/Private/Payments/screens/PaymentsReceived';
import PaymentsRegister from '../screens/Private/Payments/screens/PaymentsRegister';
import PaymentsTransfer from '../screens/Private/Payments/screens/PaymentsTransfer';
import PaymentsHistory from '../screens/Private/Payments/screens/PaymentsHistory';

import Profile from '../screens/Private/Profile';
import ProfilePersonal from '../screens/Private/Profile/screens/Personal';
import ProfileSecurity from '../screens/Private/Profile/screens/Security';
import ProfileCompany from '../screens/Private/Profile/screens/Company';

const routes = [
  { name: 'Home', component: InitialHome },

  { name: 'Login', component: Login },
  { name: 'RegisterUser', component: RegisterUser },
  { name: 'RegisterCompany', component: RegisterCompany },
  { name: 'VerifyEmail', component: VerifyEmail },

  { name: 'SuccessScreen', component: SuccessScreen },

  { name: 'Dashboard', component: Dashboard },

  { name: 'Payments', component: Payments },
  { name: 'PaymentsSchedule', component: PaymentsSchedule },
  { name: 'PaymentsDone', component: PaymentsDone },
  { name: 'PaymentsReceived', component: PaymentsReceived },
  { name: 'PaymentsRegister', component: PaymentsRegister },
  { name: 'PaymentsTransfer', component: PaymentsTransfer },
  { name: 'PaymentsHistory', component: PaymentsHistory },

  { name: 'Sales', component: Sales },
  { name: 'SalesReports', component: SalesReports },
  { name: 'SalesContracts', component: SalesContracts },
  { name: 'SalesAdditionalOptions', component: SalesAdditionalOptions },
  { name: 'SalesPoint', component: SalesPoint },
  { name: 'SalesServiceOrder', component: SalesServiceOrder },

  { name: 'MessagesChats', component: Chats },
  { name: 'MessagesChatMain', component: ChatMain },

  { name: 'Profile', component: Profile },
  { name: 'ProfilePersonal', component: ProfilePersonal },
  { name: 'ProfileSecurity', component: ProfileSecurity },
  { name: 'ProfileCompany', component: ProfileCompany },
];

export default routes;
