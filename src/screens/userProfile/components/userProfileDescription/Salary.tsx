import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {}

export const Salary: React.FC<Props> = (): ReactElement => {
  return <Text style={styles.smallText}>Salary</Text>;
};
