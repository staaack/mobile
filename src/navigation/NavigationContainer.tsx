import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import {
  LoginScreen,
  HomeRevenues,
  Settings,
  Help,
  UserProfile,
  ConsultingRevenues,
  RDInvestments,
  EducationInvestments,
  OperationsInvestments,
  TrainingRevenues,
  HRInvestments,
  MarketingInvestments,
} from '../screens';

export const AppStackNavigator = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
      HomeRevenues: {
        screen: HomeRevenues,
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
      ConsultingRenenues: {
        screen: ConsultingRevenues,
      },
      RDInvestments: {
        screen: RDInvestments,
      },
      EducationInvestments: {
        screen: EducationInvestments,
      },
      HRInvestments: {
        screen: HRInvestments,
      },
      MarketingInvestments: {
        screen: MarketingInvestments,
      },
      OperationInvestments: {
        screen: OperationsInvestments,
      },
      TrainingRevenues: {
        screen: TrainingRevenues,
      },
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      },
    },
  ),
);
