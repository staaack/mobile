import React from 'react';
import { Text, View } from 'react-native';

import { DescriptionHeader } from '../descriptionHeader';
import { TIntervalTimeProps, TimeIntervalPopup } from '../timeIntervalPopup';

import styles from './styles';

interface TProps extends TIntervalTimeProps {
  title: string;
  amount: string;
  goBack?: () => void;
}

export const RevenuesHeader: React.FC<TProps> = React.memo(
  ({
  title,
  amount,
  onThisMonthPress,
  onThisYearPress,
  onTodayPress,
  goBack,
}): JSX.Element => {
  return (
    <DescriptionHeader onBackIconPress={goBack}>
      <View style={styles.leftView}>
        <Text>{title}</Text>
        <Text>{amount}</Text>
      </View>
      <TimeIntervalPopup
        onThisMonthPress={onThisMonthPress}
        onThisYearPress={onThisYearPress}
        onTodayPress={onTodayPress}
      />
    </DescriptionHeader>
  );
});
