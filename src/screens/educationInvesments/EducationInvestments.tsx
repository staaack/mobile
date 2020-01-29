import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';

interface Props {}

export const EducationInvestments: React.FC<Props> = (): JSX.Element => {
  return (
    <InvestmentsScreen
      investmentAmount="$12,000.00"
      investmentTopic="Education Investments"
    />
  );
};
