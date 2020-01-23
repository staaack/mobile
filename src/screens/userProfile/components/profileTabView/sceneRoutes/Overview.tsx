import React from 'react';
import {
  WorkingDaysCard,
  TrainingCard,
  DailyRateCard,
} from '../../../../../components/cards';
import RouteWrapper from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';

interface Props {}

const Overview: React.FC<Props> = () => {
  return (
    <RouteWrapper>
      <WorkingDaysCard />
      <TrainingCard />
      <DailyRateCard />
    </RouteWrapper>
  );
};

export default Overview;
