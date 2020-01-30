import React from 'react';
import { View } from 'react-native';

import { RevenuesScreen } from '../../components/RevenuesScreen';
import {
  TeamRoute,
  ClientsRoute,
  ProjectsRoute,
} from '../consultingRevenues/sceneRoutes';
import { TContextValue, LocalizationContext } from '../../localization';

interface IProps {}

export const TrainingRevenues: React.SFC<IProps> = (): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);
  return (
    <RevenuesScreen
      revenuesAmount="$10,254.00"
      revenuesTopic={translations['revenue.training']}
      scenes={{
        team: TeamRoute,
        clients: ClientsRoute,
        projects: ProjectsRoute,
      }}
    />
  );
};
