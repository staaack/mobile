import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';
import { TContextValue, LocalizationContext } from '../../localization';

export const MarketingInvestments: React.SFC<{}> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  return (
    <InvestmentsScreen
      investmentAmount="$700.000"
      investmentTopic={translations['investment.marketing']}
    />
  );
};
