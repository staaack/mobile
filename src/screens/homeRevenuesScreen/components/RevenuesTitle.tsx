import React, { useContext } from 'react';
import { View } from 'react-native';
import { CustomText as Text } from '../../../components/TextPoppinsFont';

import styles from '../styles';
import { TimeIntervalPopup } from '../../../components/timeIntervalPopup';
import { TContextValue, LocalizationContext } from '../../../localization';

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
