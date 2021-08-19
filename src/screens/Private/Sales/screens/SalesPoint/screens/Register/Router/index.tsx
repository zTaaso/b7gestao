import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator
    initialRouteName="SalesPointRegisterInitial"
    screenOptions={{
      headerShown: false,
    }}
  >
    {routes.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} key={name} />
    ))}
  </Stack.Navigator>
);

export default Router;
