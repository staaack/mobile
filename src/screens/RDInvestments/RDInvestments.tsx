import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';
import { TContextValue, LocalizationContext } from '../../localization';

export const RDInvestments: React.SFC<{}> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);
  return (
    <InvestmentsScreen
      investmentAmount="$223,300.00"
      investmentTopic={translations['investment.rd']}
    />
  );
};
