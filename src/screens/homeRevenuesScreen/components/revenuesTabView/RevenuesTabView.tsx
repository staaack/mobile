import React from 'react';

import TabsView from '../../../../components/tabView/TabView';
import RevenuesRoute from '../revenuesTabView/sceneRoutes/RevenuesRoute';
import InvestmentsRoute from '../revenuesTabView/sceneRoutes/InvestmentsRoute';
import TeamRoute from '../revenuesTabView/sceneRoutes/TeamRoute';

const RevenuesTabView: React.FC<{}> = (): JSX.Element => {
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

export default RevenuesTabView;
