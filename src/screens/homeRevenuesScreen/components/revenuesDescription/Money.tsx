import React from 'react';
import { View } from 'react-native';

import { CustomText as Text } from '../../../../components/TextPoppinsFont';

import styles from './styles';

interface Props {
  title: string;
  amount: string;
}

export const Money: React.FC<Props> = ({ amount, title }) => {
  return (
    <View style={styles.money}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};
