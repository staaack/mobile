import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const Education: React.FC<Props> = ({ navigation }) => {
  const onEducationCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'EducationInvestments',
    });

  return (
    <Card
      onCardPress={onEducationCardPress}
      topic="Education"
      amount="$3,000.00"
      leftIconSource={icons.graduation}
      isTrendingUp={false}
    />
  );
};

export const EducationCard = withNavigation(Education);
