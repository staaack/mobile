import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props {}

const HRPayrollCard: React.FC<Props> = () => {
  return (
    <Card topic="HR & Payroll" amount="$500.00" leftIconSource={icons.group} />
  );
};

export default HRPayrollCard;
