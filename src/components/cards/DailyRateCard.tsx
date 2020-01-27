import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const DailyRate: React.SFC<Props> = ({ navigation }): JSX.Element => {
  const onDailyRateCardPress: () => void = () =>
    navigation.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onDailyRateCardPress}
      topic="Daily rate"
      amount="$560.00"
      leftIconSource={icons.group}
    />
  );
};

export const DailyRateCard = withNavigation(DailyRate);
