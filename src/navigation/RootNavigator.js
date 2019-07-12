import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeNavigator from './WelcomeNavigator';
import routes from './helpers/routes';

const AppNavigator = createStackNavigator(
  {
    [routes.root.Welcome]: {
      screen: WelcomeNavigator,
    },
  },
  {
    initialRouteName: routes.root.Welcome,
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
