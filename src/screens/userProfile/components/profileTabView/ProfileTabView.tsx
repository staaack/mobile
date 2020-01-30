import React, { useContext } from 'react';

import { TabsView } from '../../../../components/tabView';
import {
  Overview,
  RevenuesContributions,
  InvestementsContributions,
} from './sceneRoutes';
import { TContextValue, LocalizationContext } from '../../../../localization';

const sceneMap: { [key: string]: React.SFC<any> } = {
  overview: Overview,
  revenuesContrb: RevenuesContributions,
  investmentsContrb: InvestementsContributions,
};

export const ProfileTabView: React.SFC<{}> = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const routes = [
    { key: 'overview', title: translations['tab.overview'] },
    { key: 'revenuesContrb', title: translations['tab.revenueContributions'] },
    {
      key: 'investmentsContrb',
      title: translations['tab.investmentContributions'],
    },
  ];

  return <TabsView routes={routes} sceneMap={sceneMap} />;
};
