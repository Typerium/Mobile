import React from 'react';
// import { Easing, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '~/screens/Dashboard/Home';
import { DashboardTabs } from '~/components';
import routes from './helpers/routes';

const DashboardNavigator = createStackNavigator(
  {
    [routes.Dashboard.Home]: {
      screen: Home,
    },
  },
  {
    initialRouteName: routes.Dashboard.Home,
    headerMode: 'none',
  },
);

export default createBottomTabNavigator(
  {
    [routes.root.Dashboard]: {
      screen: DashboardNavigator,
    },
  },
  {
    initialRouteName: routes.root.Dashboard,
    headerMode: 'float',
    tabBarComponent: props => <DashboardTabs {...props} />,

  },
);
