import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import { LoginScreen } from '../../screens';

export const AuthStackNavigator = createStackNavigator(
  {
    //@ts-ignore
    Login: {
      screen: LoginScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);
