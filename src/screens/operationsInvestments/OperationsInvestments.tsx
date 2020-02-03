import React from 'react';
import { View } from 'react-native';
import { InvestmentsScreen } from '../../components/InvestmentsScreen';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props {}

export const OperationsInvestments: React.FC<Props> = () => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  return (
    <InvestmentsScreen
      investmentAmount="$223,225.00"
      investmentTopic={translations['investment.operations']}
    />
  );
};
