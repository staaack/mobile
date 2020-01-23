import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

const MarketingCard: React.FC<{}> = (): JSX.Element => {
  return (
    <Card
      topic="Marketing"
      amount="$2,000.00"
      leftIconSource={icons.tv}
      isTrendingUp={false}
    />
  );
};

export default MarketingCard;
