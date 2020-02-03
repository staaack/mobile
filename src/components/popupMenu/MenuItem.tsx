import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';

import { CustomText as Text } from '../TextPoppinsFont';

import styles from './styles';

interface Props {
  onItemPress: () => void;
  itemText: string;
}

export const MenuItem: React.FC<Props> = ({
  onItemPress,
  itemText,
}): ReactElement => {
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.item}>
      <Text style={styles.item_text}>{itemText}</Text>
    </TouchableOpacity>
  );
};
