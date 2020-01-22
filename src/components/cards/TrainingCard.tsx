import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const TrainingCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Trainings"
      amount="$13,000.00"
      LeftIcon={<Image source={icons.bookBookmark} />}
    />
  );
};

export default TrainingCard;
