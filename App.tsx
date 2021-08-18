import React from 'react';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

import Router from './src/Router';
import DashboardProvider from './src/context/DashboardContext';
import './src/util/defineMomentLocale';

const GoodTimes = require('./src/assets/fonts/good_times_rg.ttf');

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_Light: Montserrat_300Light,
    Montserrat_Bold: Montserrat_700Bold,
    Montserrat: Montserrat_400Regular,
    GoodTimes,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <DashboardProvider>
      <StatusBar translucent style="light" />
      <Router />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </DashboardProvider>
  );
};

export default App;
