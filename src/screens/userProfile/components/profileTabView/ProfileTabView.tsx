import React, { useContext } from 'react';

import { TabsView } from '../../../../components/tabView';
import {
  Overview,
  RevenuesContributions,
  InvestementsContributions,
} from './sceneRoutes';
import { TContextValue, LocalizationContext } from '../../../../localization';

interface IProps {}
export type TSceneMap = { [key: string]: React.ComponentType<any> };

const sceneMap: TSceneMap = {
  overview: Overview,
  revenuesContrb: RevenuesContributions,
  investmentsContrb: InvestementsContributions,
};

export const ProfileTabView: React.SFC<IProps> = (): JSX.Element => {
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
