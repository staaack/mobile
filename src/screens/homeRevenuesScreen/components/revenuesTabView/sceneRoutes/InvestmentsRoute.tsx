import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';
import EducationCard from '../../../../../components/cards/EducationCard';
import { RDCard } from '../../../../../components/cards';
import { HRPayrollCard } from '../../../../../components/cards';
import { OperationsCard } from '../../../../../components/cards';
import { MarketingCard } from '../../../../../components/cards';

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
