import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import {
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
} from '../../screens';

export const AppStackNavigator = createStackNavigator(
  {
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
    initialRouteName: 'HomeRevenues',
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);
