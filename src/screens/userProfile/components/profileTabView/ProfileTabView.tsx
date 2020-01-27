import React from 'react';
import { TabsView } from '../../../../components/tabView';
import Overview from './sceneRoutes/Overview';
import InvestementsContributions from './sceneRoutes/InvestementsContributions';
import RevenuesContributions from './sceneRoutes/RevenuesContributions';

const routes = [
  { key: 'overview', title: 'Overview' },
  { key: 'revenuesContrb', title: 'Revenues Contributions' },
  { key: 'investmentsContrb', title: 'Investments Contributions' },
];

const sceneMap = {
  overview: Overview,
  revenuesContrb: RevenuesContributions,
  investmentsContrb: InvestementsContributions,
};

export const ProfileTabView: React.SFC<{}> = (): JSX.Element => (
  <TabsView routes={routes} sceneMap={sceneMap} />
);
