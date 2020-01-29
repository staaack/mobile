import React from 'react';
import { View } from 'react-native';
import { InvestmentsScreen } from '../../components/InvestmentsScreen';

interface Props {}

export const OperationsInvestments: React.FC<Props> = () => {
  return (
    <InvestmentsScreen
      investmentAmount="$223,225.00"
      investmentTopic="Operations Investments"
    />
  );
};
