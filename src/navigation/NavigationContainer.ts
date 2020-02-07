import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { TransitionPresets } from 'react-navigation-stack';

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
      defaultNavigationOptions: {
        ...TransitionPresets.ScaleFromCenterAndroid,
      },
    },
  ),
);
