import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

import { RevenuesHeader } from '../RevenuesScreen';
import { ScrollViewWrapper } from '../scrollViewWrapper';

import styles from './styles';
import { TeamRoute } from '../../screens/consultingRevenues/sceneRoutes/TeamRoute';

export interface InvestmentProps extends TNavigationProps {
  investmentTopic: string;
  investmentAmount: string;
}

const Investments: React.SFC<InvestmentProps> = React.memo(
  ({
    navigation: { goBack },
    investmentAmount,
    investmentTopic,
  }): JSX.Element => {
    return (
      <View style={styles.container}>
        <RevenuesHeader
          goBack={() => goBack()}
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

export const InvestmentsScreen = withNavigation(Investments);
