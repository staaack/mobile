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
import { ConsultingRevenues } from '../../screens/consultingRevenues';
import { RDInvestments } from '../../screens/RDInvestments';
import { HRInvestments } from '../../screens/hrInvestments';
import { MarketingInvestments } from '../../screens/marketingInvestments';
import { OperationInvestments } from '../../screens/operationsInvestments';
import { TrainingRevenues } from '../../screens/trainingRevenues';
import { EducationInvestments } from '../../screens/educationInvesments';

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
      screen: OperationInvestments,
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
);

export default createAppContainer(appStackNav);
