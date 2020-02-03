import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import RouteWrapper from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import { ConsultingCard, TrainingCard } from '../../../../../components/cards';
import { TNavigationProps } from '../../../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';

interface Props extends TNavigationProps {}

const RevenuesContrib: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onTrainingCardPress: () => void = () =>
    navigation!.navigate({
      // This screen isn't ready yet
      routeName: '',
    });

  return (
    <RouteWrapper>
      <ConsultingCard />
      <TrainingCard
        cardTitle={translations['cards.training']}
        onCardPress={onTrainingCardPress}
        amount="$23,700.00"
      />
    </RouteWrapper>
  );
};

//@ts-ignore
export const RevenuesContributions = withNavigation(RevenuesContrib);
