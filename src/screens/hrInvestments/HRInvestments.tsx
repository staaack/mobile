import React from 'react';
import { View } from 'react-native';
import { InvestmentsScreen } from '../../components/InvestmentsScreen';

interface Props {}

export const HRInvestments: React.FC<Props> = () => {
  return (
    <InvestmentsScreen
      investmentAmount="$125,232.20"
      investmentTopic="HR & Payroll Investments"
    />
  );
};
