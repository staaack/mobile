import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import styles from './styles';
import { LocalizationContext, TContextValue } from '../../localization';

interface Props {
  onLogoutPress?: () => void;
}

export const LogoutButton: React.FC<Props> = ({
  onLogoutPress,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  return (
    <TouchableOpacity onPress={onLogoutPress}>
      <Text style={styles.text}>{translations['settings.logout']}</Text>
    </TouchableOpacity>
  );
};
