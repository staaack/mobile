import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

import { TabsView } from '../tabView';
import { RevenuesHeader } from './RevenuesHeader';

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
    key: 'client',
    title: 'Client',
  },
  {
    key: 'project',
    title: 'Project',
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
      <View>
        <RevenuesHeader
          goBack={() => goBack()}
          title={revenuesTopic}
          amount={revenuesAmount}
          onThisMonthPress={() => {}}
          onThisYearPress={() => {}}
          onTodayPress={() => {}}
        />
        <TabsView routes={routes} sceneMap={scenes} />
      </View>
    );
  },
);

export const RevenuesScreen = withNavigation(Revenues);
