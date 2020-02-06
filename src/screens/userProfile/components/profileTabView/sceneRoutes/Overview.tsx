import React, { useContext, useCallback } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import {
  WorkingDaysCard,
  TrainingCard,
  DailyRateCard,
  CurrentProjectCard,
} from '../../../../../components/cards';
import { RouteWrapper } from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';

import { TGlobalContext, GlobalContext } from '../../../../../context';
import { View } from 'react-native';

interface Props extends NavigationInjectedProps {}

const OverviewTab: React.SFC<Props> = React.memo(
  ({ navigation }): JSX.Element => {
    const { translations } = useContext<TContextValue>(LocalizationContext);

    const { state } = React.useContext<TGlobalContext>(GlobalContext);

    const engineer = state.selectedEngineer;

    const onTrainingCardPress: () => void = useCallback(
      () =>
        navigation!.navigate({
          routeName: '',
        }),
      [],
    );

    return engineer ? (
      // these hard-coded values not yet provided in this Mock API
      <RouteWrapper>
        <WorkingDaysCard amount="240" />
        <TrainingCard
          cardTitle={translations['cards.trainingBudget']}
          onCardPress={onTrainingCardPress}
          amount="$256.000"
        />
        <DailyRateCard amount={engineer!.dailyRate} />
        <CurrentProjectCard currentProject={engineer.currentProject} />
      </RouteWrapper>
    ) : (
      <View />
    );
  },
);

export const Overview = withNavigation(OverviewTab);
