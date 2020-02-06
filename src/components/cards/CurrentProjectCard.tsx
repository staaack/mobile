import React, { useContext } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { TContextValue, LocalizationContext } from '../../localization';
import { Card } from '../customCard';
import icons from '../../assets/icons';

interface Props extends NavigationInjectedProps {
  currentProject: string;
}

const CurrentProject: React.SFC<Props> = ({ currentProject }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  return (
    <Card
      topic={translations['cards.currentProject']}
      amount={currentProject}
      leftIconSource={icons.task}
      displayTrend={false}
    />
  );
};

export const CurrentProjectCard = withNavigation(CurrentProject);
