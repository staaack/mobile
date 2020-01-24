import React from 'react';
import { View } from 'react-native';
import RouteWrapper from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import { ConsultingCard, TrainingCard } from '../../../../../components/cards';

interface Props {}

const RevenuesContributions: React.FC<Props> = () => {
  return (
    <RouteWrapper>
      <ConsultingCard />
      <TrainingCard />
    </RouteWrapper>
  );
};

export default RevenuesContributions;
