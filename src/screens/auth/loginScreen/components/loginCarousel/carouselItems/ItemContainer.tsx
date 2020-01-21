import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const ItemContainer: React.FC<Props> = ({ children }): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default ItemContainer;
