import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  amount: string;
}

export const Money: React.FC<Props> = ({ amount, title }) => {
  return (
    <View style={styles.money}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>€{amount}</Text>
    </View>
  );
};
