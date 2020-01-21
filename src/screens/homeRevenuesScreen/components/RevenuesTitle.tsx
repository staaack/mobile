import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { TimeIntervalPopup } from '../../../components/timeIntervalPopup';

interface Props {}

const RevenuesTitle: React.FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.revenuesTitleContainer}>
      <Text style={styles.revenuesTitle}>Revenues</Text>
      <TimeIntervalPopup />
    </View>
  );
};

export default RevenuesTitle;
