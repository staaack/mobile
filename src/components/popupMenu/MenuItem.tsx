import React, { ReactElement } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  onItemPress: () => void;
  itemText: string;
}

const MenuItem: React.FC<Props> = ({ onItemPress, itemText }): ReactElement => {
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.item}>
      <Text>{itemText}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
