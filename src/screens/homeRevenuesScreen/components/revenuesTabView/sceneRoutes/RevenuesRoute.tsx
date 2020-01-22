import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';
import { Card } from '../../../../../components/customCard';
import styles from './styles';
import ConsultingCard from '../../../../../components/cards/ConsultingCard';
import TrainingCard from '../../../../../components/cards/TrainingCard';

const RevenuesRoute: React.SFC<{}> = (): ReactElement => (
  <RouteWrapper>
    <View style={styles.container}>
      <ConsultingCard />
      <TrainingCard />
    </View>
  </RouteWrapper>
);

export default RevenuesRoute;
