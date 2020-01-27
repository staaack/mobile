import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {}

export const Box: React.FC<Props> = (): JSX.Element => {
  return <View style={styles.container}></View>;
};
