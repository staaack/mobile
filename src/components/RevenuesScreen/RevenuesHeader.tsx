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
<<<<<<< HEAD
    title,
    amount,
    onThisMonthPress,
    onThisYearPress,
    onTodayPress,
    goBack,
  }): JSX.Element => {
    return (
      <DescriptionHeader onBackIconPress={goBack}>
        <View style={styles.container}>
          <View style={styles.leftView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.amount}>{amount}</Text>
          </View>
          <TimeIntervalPopup
            onThisMonthPress={onThisMonthPress}
            onThisYearPress={onThisYearPress}
            onTodayPress={onTodayPress}
            dialogStyles={styles.dialog}
          />
        </View>
      </DescriptionHeader>
    );
  },
);
=======
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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <TimeIntervalPopup
        onThisMonthPress={onThisMonthPress}
        onThisYearPress={onThisYearPress}
        onTodayPress={onTodayPress}
      />
    </DescriptionHeader>
  );
});
>>>>>>> origin/font-migration
