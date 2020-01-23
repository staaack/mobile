import React from 'react';
import TabsView from '../../../../components/tabView/TabView';
import Overview from './sceneRoutes/Overview';
import InvestementsContributions from './sceneRoutes/InvestementsContributions';
import RevenuesContributions from './sceneRoutes/RevenuesContributions';
import { View } from 'react-native';
import Colors from '../../../../styles/theme/colors';
import RouteWrapper from '../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';

interface Props {}

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

const ProfileTabView: React.FC<Props> = (): JSX.Element => (
  <TabsView routes={routes} sceneMap={sceneMap} />
);

export default ProfileTabView;
