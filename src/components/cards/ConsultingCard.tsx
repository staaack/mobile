import React from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const ConsultingCard: React.FC<Props> = () => {
  return (
    <Card topic="Consulting" amount="$13,000.00" leftIconSource={icons.group} />
  );
};

export default ConsultingCard;
