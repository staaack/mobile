import React from 'react';
import { RouteWrapper } from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import {
  EducationCard,
  RDCard,
  HRPayrollCard,
  MarketingCard,
  OperationsCard,
} from '../../../../../components/cards';
import {
  TGlobalContext,
  GlobalContext,
} from '../../../../../context/globalContext/context';

interface Props {}

export const InvestementsContributions: React.FC<Props> = () => {
  const { state } = React.useContext<TGlobalContext>(GlobalContext);

  const engineer = state!.selectedEngineer!;

  return (
    <RouteWrapper>
      <EducationCard amount={engineer.educationContribution!} />
      <RDCard amount={engineer.rAndDContribution} />
      <HRPayrollCard amount={engineer.hrAndProfileContribution} />
      <MarketingCard amount={engineer.marketingContribution} />
      <OperationsCard amount="$356.23" />
    </RouteWrapper>
  );
};
