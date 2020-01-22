import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const OperationsCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Operations"
      amount="$1,000.00"
      LeftIcon={<Image source={icons.task} />}
    />
  );
};

export default OperationsCard;
