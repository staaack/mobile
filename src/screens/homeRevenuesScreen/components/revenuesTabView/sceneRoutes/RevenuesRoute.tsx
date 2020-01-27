import React, { ReactElement } from 'react';
import { View } from 'react-native';

import RouteWrapper from './RouteWrapper';
import styles from './styles';
import { ConsultingCard } from '../../../../../components/cards';
import { TrainingCard } from '../../../../../components/cards';

export const RevenuesRoute: React.SFC<{}> = (): ReactElement => (
  <RouteWrapper>
    <View style={styles.container}>
      <ConsultingCard />
      <TrainingCard />
    </View>
  </RouteWrapper>
);
