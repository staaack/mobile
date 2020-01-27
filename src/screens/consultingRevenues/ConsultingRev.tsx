import React from 'react';
import { RevenuesScreen } from '../../components/RevenuesScreen';

interface Props {}

export const ConsultingRevenues: React.FC<Props> = (): JSX.Element => {
  return (
    <RevenuesScreen
      revenuesAmount="10,254.00"
      revenuesTopic="Consulting Revenues"
      scenes={{}}
    />
  );
};
