import React, { ReactElement } from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
  onItemPress: () => void;
  itemText: string;
}

const MenuItem: React.FC<Props> = ({ onItemPress, itemText }): ReactElement => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <Text>{itemText}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
