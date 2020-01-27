import React from 'react';

import { TabsView } from '../../../../components/tabView';
import {RevenuesRoute} from '../revenuesTabView/sceneRoutes';
import InvestmentsRoute from '../revenuesTabView/sceneRoutes/InvestmentsRoute';
import { TeamRoute } from '../revenuesTabView/sceneRoutes';

export const RevenuesTabView: React.FC<{}> = (): JSX.Element => {
  const routes = [
    { key: 'revenues', title: 'Revenues' },
    { key: 'investments', title: 'Investments' },
    { key: 'team', title: 'Team' },
  ];

  const sceneMap = {
    revenues: RevenuesRoute,
    investments: InvestmentsRoute,
    team: TeamRoute,
  };

  return <TabsView routes={routes} sceneMap={sceneMap} />;
};
