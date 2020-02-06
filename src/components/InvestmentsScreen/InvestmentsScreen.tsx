import React from 'react';
import { View } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { RevenuesHeader } from '../RevenuesScreen';
import { ScrollViewWrapper } from '../scrollViewWrapper';

import styles from './styles';
import { TeamRoute } from '../../screens/consultingRevenues/sceneRoutes/TeamRoute';

export interface InvestmentProps extends NavigationInjectedProps {
  investmentTopic: string;
  investmentAmount: string;
}

const Investments: React.SFC<InvestmentProps> = React.memo(
  ({ navigation, investmentAmount, investmentTopic }): JSX.Element => {
    return (
      <View style={styles.container}>
        <RevenuesHeader
          goBack={() => navigation!.goBack()}
          title={investmentTopic}
          amount={investmentAmount}
          onThisMonthPress={() => {}}
          onThisYearPress={() => {}}
          onTodayPress={() => {}}
        />
        <ScrollViewWrapper>
          <TeamRoute />
        </ScrollViewWrapper>
      </View>
    );
  },
);

// @ts-ignore
export const InvestmentsScreen = withNavigation(Investments);
