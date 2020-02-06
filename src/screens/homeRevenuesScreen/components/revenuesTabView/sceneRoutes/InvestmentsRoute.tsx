import React, { ReactElement } from 'react';

import { RouteWrapper } from './RouteWrapper';
import {
  EducationCard,
  RDCard,
  HRPayrollCard,
  MarketingCard,
  OperationsCard,
} from '../../../../../components/cards';

const InvestmentsRoute: React.SFC<{}> = (): ReactElement => (
  <RouteWrapper>
    <EducationCard />
    <RDCard />
    <HRPayrollCard />
    <MarketingCard />
    <OperationsCard />
  </RouteWrapper>
);

export default InvestmentsRoute;
