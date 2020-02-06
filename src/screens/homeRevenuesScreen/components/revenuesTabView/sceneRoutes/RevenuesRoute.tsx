import React, { useContext } from 'react';
import { View } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { TrainingCard } from '../../../../../components/cards';
import { TGlobalContext, GlobalContext } from '../../../../../context';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import { RouteWrapper } from './RouteWrapper';
import styles from './styles';
import { ConsultingCard } from '../../../../../components/cards';

interface IProps {}

const Revenues: React.SFC<NavigationInjectedProps<IProps>> = ({
  navigation,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const { state } = useContext<TGlobalContext>(GlobalContext);

  const onTrainingCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'TrainingRevenues',
    });

  return (
    <RouteWrapper>
      <View style={styles.container}>
        <ConsultingCard amount="$2,256.00" />
        <TrainingCard
          cardTitle={translations['cards.trainings']}
          amount={state!.data['Sales']['Financial Metrics'][3][2]}
          onCardPress={onTrainingCardPress}
        />
      </View>
    </RouteWrapper>
  );
};

export const RevenuesRoute = withNavigation(Revenues);
