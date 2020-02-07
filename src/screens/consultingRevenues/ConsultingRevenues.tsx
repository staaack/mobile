import React from 'react';
import { RevenuesScreen } from '../../components/RevenuesScreen';
import { TeamRoute, ClientsRoute, ProjectsRoute } from './sceneRoutes';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props {}

export const ConsultingRevenues: React.FC<Props> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  

  return (
    <RevenuesScreen
      revenuesAmount="$10,254.00"
      revenuesTopic={translations['revenue.consulting']}
      scenes={{
        team: TeamRoute,
        clients: ClientsRoute,
        projects: ProjectsRoute,
      }}
    />
  );
};
