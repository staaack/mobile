import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CustomText as Text } from '../TextPoppinsFont';

import styles from './styles';

interface Props {
  onLogoutPress?: () => void;
}

export const LogoutButton: React.FC<Props> = ({
  onLogoutPress,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onLogoutPress}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};
