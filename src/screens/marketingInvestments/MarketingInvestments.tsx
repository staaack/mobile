import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';

export const MarketingInvestments: React.SFC<{}> = (): JSX.Element => {
  return (
    <InvestmentsScreen
      investmentAmount="$700.000"
      investmentTopic="Marketing Investments"
    />
  );
};
