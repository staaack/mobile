import React from 'react';
import { TouchableOpacity } from 'react-native';

import { CustomText as Text } from '../../../../../components/TextPoppinsFont';

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
