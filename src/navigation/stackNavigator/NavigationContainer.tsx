import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import { LoginScreen } from '../../screens/auth/loginScreen';
import { HomeRevenuesScreen } from '../../screens/homeRevenuesScreen';
import Help from '../../screens/help/Help';
import Settings from '../../screens/settings/Settings';
import { UserProfile } from '../../screens/userProfile';

export const appStackNav = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    HomeRevenues: {
      screen: HomeRevenuesScreen,
    },
    Help: {
      screen: Help,
    },
    Settings: {
      screen: Settings,
    },
    UserProfile: {
      screen: UserProfile,
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
