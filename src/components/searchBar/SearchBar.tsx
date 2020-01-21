import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../styles/theme/colors';

interface Props {}

const SearchBar: React.FC<Props> = (): JSX.Element => {
  const [value, onChangeText] = useState<string>('');

  const onTextInputChange = useCallback(val => onChangeText(val), [value]);

  return (
    <View style={styles.container}>
      <Icon name="ios-search" color={Colors.GREY} size={20} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={onTextInputChange}
      />
    </View>
  );
};

export default SearchBar;
