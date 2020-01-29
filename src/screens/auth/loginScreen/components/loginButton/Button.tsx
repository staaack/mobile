import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  /**
   * @description triggered when pressing on login button
   */
  onButtonPress?: () => void;

  /**
   * @description Text of the login button
   */
  loginText: string;
}

export const LoginButton: React.FC<Props> = ({ onButtonPress, loginText }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{loginText} Hackages</Text>
    </TouchableOpacity>
  );
};
