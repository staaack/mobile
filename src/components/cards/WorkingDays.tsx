import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const WorkingDaysCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Working days"
      amount="256"
      LeftIcon={<Image source={icons.calendar}  />}
    />
  );
};

export default WorkingDaysCard;
