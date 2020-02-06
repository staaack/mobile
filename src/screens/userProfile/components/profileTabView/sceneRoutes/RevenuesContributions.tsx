import React, { useContext } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import { RouteWrapper } from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes';
import { ConsultingCard, TrainingCard } from '../../../../../components/cards';

const RevenuesContrib: React.SFC<NavigationInjectedProps<{}>> = ({
  navigation,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onTrainingCardPress: () => void = () =>
    navigation.navigate({
      // This screen isn't ready yet
      routeName: '',
    });

  return (
    <RouteWrapper>
      <ConsultingCard amount="$255,26" />
      <TrainingCard
        cardTitle={translations['cards.trainings']}
        onCardPress={onTrainingCardPress}
        amount="$230.00"
      />
    </RouteWrapper>
  );
};

export const RevenuesContributions = withNavigation(RevenuesContrib);
