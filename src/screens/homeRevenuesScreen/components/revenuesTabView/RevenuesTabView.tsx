import React, { useContext } from 'react';

import { TabsView } from '../../../../components/tabView';
import { RevenuesRoute } from '../revenuesTabView/sceneRoutes';
import InvestmentsRoute from '../revenuesTabView/sceneRoutes/InvestmentsRoute';
import { TeamRoute } from '../revenuesTabView/sceneRoutes';
import { TContextValue, LocalizationContext } from '../../../../localization';

export const RevenuesTabView: React.FC<{}> = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  const routes = [
    { key: 'revenues', title: translations['tab.revenues'] },
    { key: 'investments', title: translations['tab.investments'] },
    { key: 'team', title: translations['tab.team'] },
  ];

  const sceneMap = {
    revenues: RevenuesRoute,
    investments: InvestmentsRoute,
    team: TeamRoute,
  };

  return <TabsView routes={routes} sceneMap={sceneMap} />;
};
