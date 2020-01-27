import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors } from '../../styles';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  placeholder,
  onChangeText,
}): JSX.Element => {
  const [value, onChangeTextInput] = useState<string>('');

  const onTextInputChange = useCallback(
    (val: string) => {
      onChangeTextInput(val);
      onChangeText(val);
    },
    [value],
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Icon name="ios-search" color={Colors.GREY} size={22} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onTextInputChange}
        placeholder={placeholder}
      />
    </KeyboardAvoidingView>
  );
};
