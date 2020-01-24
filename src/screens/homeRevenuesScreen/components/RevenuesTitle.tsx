import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { TimeIntervalPopup } from '../../../components/timeIntervalPopup';

const RevenuesTitle: React.FC<{}> = (): JSX.Element => {
  const onTodayItemPress: () => void = () => {};

  const onMonthItemPress: () => void = () => {};

  const onYearItemPress: () => void = () => {};

  return (
    <View style={styles.revenuesTitleContainer}>
      <Text style={styles.revenuesTitle}>Revenues</Text>
      <TimeIntervalPopup
        onThisMonthPress={onMonthItemPress}
        onThisYearPress={onYearItemPress}
        onTodayPress={onTodayItemPress}
      />
    </View>
  );
};

export default RevenuesTitle;
