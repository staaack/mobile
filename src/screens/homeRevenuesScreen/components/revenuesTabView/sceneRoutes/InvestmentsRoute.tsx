import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';
import EducationCard from '../../../../../components/cards/EducationCard';
import RDCard from '../../../../../components/cards/RD';
import HRPayrollCard from '../../../../../components/cards/HRPayroll';
import OperationsCard from '../../../../../components/cards/Operations';
import MarketingCard from '../../../../../components/cards/MarketingCard';

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
