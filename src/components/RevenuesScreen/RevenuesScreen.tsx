import React from 'react';
import { View } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { TabsView } from '../tabView';
import { RevenuesHeader } from './RevenuesHeader';
import { ScrollViewWrapper } from '../scrollViewWrapper';
import styles from './styles';

export interface RevenuesProps extends NavigationInjectedProps {
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

const RevenuesComp: React.SFC<RevenuesProps> = React.memo(
  ({ navigation, revenuesAmount, revenuesTopic, scenes }): JSX.Element => {
    return (
      <View style={styles.container}>
        <RevenuesHeader
          goBack={() => navigation!.goBack()}
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

export const RevenuesScreen = withNavigation(RevenuesComp);
