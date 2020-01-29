import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onButtonPress?: () => void;
}

export const LoginButton: React.FC<Props> = ({ onButtonPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      <Text style={styles.buttonText}>Login with Hackages</Text>
    </TouchableOpacity>
  );
};
