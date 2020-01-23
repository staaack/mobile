import React from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const OperationsCard: React.FC<Props> = () => {
  return (
    <Card
      topic="Operations"
      amount="$1,000.00"
      leftIconSource={icons.task}
    />
  );
};

export default OperationsCard;
