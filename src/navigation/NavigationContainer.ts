import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AuthStackNavigator } from './AuthStackNavigator';
import { AppStackNavigator } from './AppStackNavigator';
import { AuthLoading } from '../screens/authLoadingScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthStack: AuthStackNavigator,
      AppStack: AppStackNavigator,
      AuthLoading,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
