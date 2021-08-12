import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from './routes';

const Tab = createBottomTabNavigator();

const Router: React.FC = () => (
  // <NavigationContainer independent>
  <Tab.Navigator
    initialRouteName="SalesPointSell"
    screenOptions={{
      headerShown: false,

      tabBarStyle: {
        borderTopColor: 'rgba(0, 0, 0, 0.7)',
        borderTopWidth: 1,
        height: 55,
      },

      tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat_Bold' },
      tabBarInactiveBackgroundColor: '#1a1f24',
      tabBarActiveBackgroundColor: '#1a1f24',
      tabBarActiveTintColor: '#30D88B',
    }}
  >
    {routes.map(({ name, component, title, icon }) => (
      <Tab.Screen
        name={name}
        component={component}
        key={name}
        options={{
          title,
          tabBarIcon: ({ color, size }) => (
            <icon.Icon name={icon.name as never} color={color} size={size} />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
  // </NavigationContainer>
);

export default Router;
