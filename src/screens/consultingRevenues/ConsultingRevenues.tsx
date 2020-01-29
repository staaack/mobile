import React from 'react';
import { RevenuesScreen } from '../../components/RevenuesScreen';
import { TeamRoute, ClientsRoute, ProjectsRoute } from './sceneRoutes';

interface Props {}

export const ConsultingRevenues: React.FC<Props> = (): JSX.Element => {
  return (
    <RevenuesScreen
      revenuesAmount="$10,254.00"
      revenuesTopic="Consulting Revenues"
      scenes={{
        team: TeamRoute,
        clients: ClientsRoute,
        projects: ProjectsRoute,
      }}
    />
  );
};
