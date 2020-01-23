import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const RDCard: React.FC<Props> = () => {
  return <Card topic="R&D" amount="$2,000.00" leftIconSource={icons.flask} />;
};

export default RDCard;
