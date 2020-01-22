import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const MarketingCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Marketing"
      amount="$2,000.00"
      LeftIcon={<Image source={icons.tv} />}
    />
  );
};

export default MarketingCard;
