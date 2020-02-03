import React, { useContext, useCallback } from 'react';
import { withNavigation } from 'react-navigation';

import {
  WorkingDaysCard,
  TrainingCard,
  DailyRateCard,
  CurrentProjectCard,
} from '../../../../../components/cards';
import RouteWrapper from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import { TNavigationProps } from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

interface Props extends TNavigationProps {}

const OverviewTab: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onTrainingCardPress: () => void = useCallback(
    () =>
      navigation!.navigate({
        routeName: '',
      }),
    [],
  );

  return (
    <RouteWrapper>
      <WorkingDaysCard />
      <TrainingCard
        cardTitle={translations['cards.trainingBudget']}
        onCardPress={onTrainingCardPress}
        amount="$256.000"
      />
      <DailyRateCard />
      <CurrentProjectCard />
    </RouteWrapper>
  );
};

// @ts-ignore
export const Overview = withNavigation(OverviewTab);
