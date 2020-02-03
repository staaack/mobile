import React from 'react';
import { TouchableOpacity } from 'react-native';

import { CustomText as Text } from '../../../../../components/TextPoppinsFont';

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
