import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const CurrentProject: React.FC<Props> = ({ navigation }): JSX.Element => {
  return (
    <Card
      topic="Current Project"
      amount="Staack"
      leftIconSource={icons.task}
      displayTrend={false}
    />
  );
};

export const CurrentProjectCard = withNavigation(CurrentProject);
