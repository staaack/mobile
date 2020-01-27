import React from 'react';
import { withNavigation } from 'react-navigation';

import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props extends TNavigationProps {}

const Training: React.SFC<Props> = ({ navigation }): JSX.Element => {
  const onTrainingCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'TrainingRevenues',
    });

  return (
    <Card
      onCardPress={onTrainingCardPress}
      topic="Trainings"
      amount="$13,000.00"
      leftIconSource={icons.bookBookmark}
    />
  );
};

export const TrainingCard = withNavigation(Training);
