import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeNavigator from './WelcomeNavigator';
import DashboardNavigator from './DashboardNavigator';
import Camera from '~/components/Camera';
import routes from './helpers/routes';

const AppNavigator = createStackNavigator(
  {
    [routes.root.Welcome]: {
      screen: WelcomeNavigator,
    },
    [routes.root.Dashboard]: {
      screen: DashboardNavigator,
    },
    [routes.root.Camera]: {
      screen: Camera,
    },
  },
  {
    initialRouteName: routes.root.Welcome,
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
