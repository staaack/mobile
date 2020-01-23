import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const DailyRateCard: React.FC<Props> = () => {
  return (
    <Card topic="Daily rate" amount="$560.00" leftIconSource={icons.group} />
  );
};

export default DailyRateCard;
