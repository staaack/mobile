import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import { CustomText as Text } from '../../../../../components/TextPoppinsFont';

import styles from './styles';
import { Colors } from '../../../../../styles/theme/colors';

interface Props {
  /**
   * @description triggered when pressing on login button
   */
  onButtonPress?: () => void;

  /**
   * @description Text of the login button
   */
  loginText: string;

  /**
   * @description this boolean value to show or not the activity indicator
   */
  isLoading?: boolean;
}

export const LoginButton: React.FC<Props> = ({
  onButtonPress,
  loginText,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.WHITE} />
      ) : (
        <Text style={styles.buttonText}>{loginText} Hackages</Text>
      )}
    </TouchableOpacity>
  );
};
