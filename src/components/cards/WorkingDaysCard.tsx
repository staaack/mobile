import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const WorkingDays: React.FC<Props> = ({ navigation }): JSX.Element => {
  const onWorkingDaysCardPress: () => void = () =>
    navigation.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onWorkingDaysCardPress}
      topic="Working days"
      amount="256"
      leftIconSource={icons.calendar}
    />
  );
};

export const WorkingDaysCard = withNavigation(WorkingDays);
