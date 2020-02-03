import React, { ReactElement, useContext } from 'react';
import { View } from 'react-native';

import RouteWrapper from './RouteWrapper';
import styles from './styles';
import { ConsultingCard } from '../../../../../components/cards';
import { TrainingCard } from '../../../../../components/cards';
import { TNavigationProps } from './TeamRoute';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import { withNavigation } from 'react-navigation';

interface IProps extends TNavigationProps {}

const Revenues: React.SFC<IProps> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onTrainingCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'TrainingRevenues',
    });

  return (
    <RouteWrapper>
      <View style={styles.container}>
        <ConsultingCard />
        <TrainingCard
          cardTitle={translations['cards.training']}
          amount="$35,215.00"
          onCardPress={onTrainingCardPress}
        />
      </View>
    </RouteWrapper>
  );
};

// @ts-ignore
export const RevenuesRoute = withNavigation(Revenues);
