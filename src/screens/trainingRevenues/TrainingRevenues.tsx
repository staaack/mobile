import React from 'react';
import { View } from 'react-native';

import { RevenuesScreen } from '../../components/RevenuesScreen';
import {
  TeamRoute,
  ClientsRoute,
  ProjectsRoute,
} from '../consultingRevenues/sceneRoutes';

interface IProps {}

export const TrainingRevenues: React.SFC<IProps> = (): JSX.Element => {
  return (
    <RevenuesScreen
      revenuesAmount="$10,254.00"
      revenuesTopic="Training Revenues"
      scenes={{
        team: TeamRoute,
        clients: ClientsRoute,
        projects: ProjectsRoute,
      }}
    />
  );
};
