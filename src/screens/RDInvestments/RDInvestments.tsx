import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';

export const RDInvestments: React.SFC<{}> = (): JSX.Element => {
  return (
    <InvestmentsScreen
      investmentAmount="$223,300.00"
      investmentTopic="R & D Investments"
    />
  );
};
