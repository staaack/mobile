import React from 'react';
import { View } from 'react-native';
import { InvestmentsScreen } from '../../components/InvestmentsScreen';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props {}

export const HRInvestments: React.FC<Props> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  return (
    <InvestmentsScreen
      investmentAmount="$125,232.20"
      investmentTopic={translations['investment.hrPayroll']}
    />
  );
};
