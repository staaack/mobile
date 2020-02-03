import React from 'react';
import { View } from 'react-native';
import RouteWrapper from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import {
  EducationCard,
  RDCard,
  HRPayrollCard,
  MarketingCard,
  OperationsCard,
} from '../../../../../components/cards';

interface Props {}

export const InvestementsContributions: React.FC<Props> = () => {
  return (
    <RouteWrapper>
      <EducationCard />
      <RDCard />
      <HRPayrollCard />
      <MarketingCard />
      <OperationsCard />
    </RouteWrapper>
  );
};
