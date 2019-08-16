import React from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { WelcomeHeader } from '~/components';
import LogIn from '~/screens/Welcome/LogIn';
import WelcomeBack from '~/screens/Welcome/WelcomeBack';
import Forgot from '~/screens/Welcome/Forgot';
import SignUp from '~/screens/Welcome/SignUp';
import ConfirmEmail from '~/screens/Welcome/ConfirmEmail';
import routes from './helpers/routes';

const header = props => ({ header: () => <WelcomeHeader {...props} /> });
const transitionConfig = () => ({
  transitionSpec: {
    duration: 750,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;

    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    return { transform: [{ translateX }] };
  },
});

export default createStackNavigator(
  {
    [routes.Welcome.LogIn]: {
      screen: LogIn,
      navigationOptions: header({ title: 'Log in', noBackIcon: true }),
    },
    [routes.Welcome.WelcomeBack]: {
      screen: WelcomeBack,
      navigationOptions: header({ title: 'Welcome back!' }),
    },
    [routes.Welcome.Forgot]: {
      screen: Forgot,
      navigationOptions: header({ title: 'Forgot password' }),
    },
    [routes.Welcome.SignUp]: {
      screen: SignUp,
      navigationOptions: header({ title: 'Sign up' }),
    },
    [routes.Welcome.ConfirmEmail]: {
      screen: ConfirmEmail,
      navigationOptions: header({
        title: 'Almost done',
        backToTop: true,
      }),
    },
  },
  {
    initialRouteName: routes.Welcome.LogIn,
    headerMode: 'float',
    transitionConfig,
  },
);
