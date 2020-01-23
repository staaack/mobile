import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const EducationCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Education"
      amount="$3,000.00"
      leftIconSource={icons.graduation}
      isTrendingUp={false}
    />
  );
};

export default EducationCard;
