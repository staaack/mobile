import React from 'react';

import { InvestmentsScreen } from '../../components/InvestmentsScreen';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props {}

export const EducationInvestments: React.FC<Props> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  return (
    <InvestmentsScreen
      investmentTopic={translations['investment.education']}
      investmentAmount="$12,000.00"
    />
  );
};
