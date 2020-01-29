import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { TimeIntervalPopup } from '../../../components/timeIntervalPopup';
import {
  TContextValue,
  LocalizationContext,
} from '../../../localization/LocalizationContext';

const RevenuesTitle: React.FC<{}> = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  const onTodayItemPress: () => void = () => {};

  const onMonthItemPress: () => void = () => {};

  const onYearItemPress: () => void = () => {};

  return (
    <View style={styles.revenuesTitleContainer}>
      <Text style={styles.revenuesTitle}>{translations['tab.revenues']}</Text>
      <TimeIntervalPopup
        onThisMonthPress={onMonthItemPress}
        onThisYearPress={onYearItemPress}
        onTodayPress={onTodayItemPress}
        dialogStyles={styles.dialog}
      />
    </View>
  );
};

export default RevenuesTitle;
