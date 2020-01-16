import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {}

const Button: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>Login with Hackages</Text>
    </TouchableOpacity>
  );
};

export default Button;
