import React, { useContext } from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends TNavigationProps {}

const CurrentProject: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  return (
    <Card
      topic={translations['cards.currentProject']}
      amount="Staack"
      leftIconSource={icons.task}
      displayTrend={false}
    />
  );
};

// @ts-ignore
export const CurrentProjectCard = withNavigation(CurrentProject);
