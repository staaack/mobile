import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import { LoginScreen } from '../../screens/auth/loginScreen';
import { HomeRevenuesScreen } from '../../screens/homeRevenuesScreen';
import transitionConfig from '../transitionConfig';

export const appStackNav = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    HomeRevenues: {
      screen: HomeRevenuesScreen,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default createAppContainer(appStackNav);
