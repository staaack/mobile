import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen } from '../../screens/auth/loginScreen';
import { HomeRevenuesScreen } from '../../screens/homeRevenuesScreen';

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
    },
  },
);

export default createAppContainer(appStackNav);
