import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

import { TabsView } from '../tabView';
import { RevenuesHeader } from './RevenuesHeader';
import { ScrollViewWrapper } from '../scrollViewWrapper';
import styles from './styles';

export interface RevenuesProps extends TNavigationProps {
  revenuesTopic: string;
  revenuesAmount: string;
  scenes: {
    [key: string]: React.ComponentType<any>;
  };
}

const routes: Array<{ key: string; title: string }> = [
  {
    key: 'team',
    title: 'Team',
  },
  {
    key: 'clients',
    title: 'Clients',
  },
  {
    key: 'projects',
    title: 'Projects',
  },
];

const Revenues: React.SFC<RevenuesProps> = React.memo(
  ({
    navigation: { goBack },
    revenuesAmount,
    revenuesTopic,
    scenes,
  }): JSX.Element => {
    return (
      <View style={styles.container}>
        <RevenuesHeader
          goBack={() => goBack()}
          title={revenuesTopic}
          amount={revenuesAmount}
          onThisMonthPress={() => {}}
          onThisYearPress={() => {}}
          onTodayPress={() => {}}
        />
        <ScrollViewWrapper>
          <TabsView routes={routes} sceneMap={scenes} />
        </ScrollViewWrapper>
      </View>
    );
  },
);

export const RevenuesScreen = withNavigation(Revenues);
