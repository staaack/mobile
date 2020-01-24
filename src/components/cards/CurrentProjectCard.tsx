import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const CurrentProjectCard: React.FC<Props> = (): JSX.Element => {
  return (
    <Card
      topic="Current Project"
      amount="Staack"
      leftIconSource={icons.task}
      displayTrend={false}
    />
  );
};

export default CurrentProjectCard;
