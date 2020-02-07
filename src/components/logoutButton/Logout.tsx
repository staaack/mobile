import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CustomText as Text } from '../TextPoppinsFont';

import styles from './styles';
import { LocalizationContext, TContextValue } from '../../localization';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../../styles/theme/colors';

interface Props {
  /**
   * @description triggered when press on Logout text
   */
  onLogoutPress?: () => void;

  /**
   * @description Boolean Value indicates whether to show a loading spinner
   */
  isLoading?: boolean;
}

export const LogoutButton: React.FC<Props> = React.memo(
  ({ onLogoutPress, isLoading }): JSX.Element => {
    const { translations } = useContext<TContextValue>(LocalizationContext);
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator color={Colors.RED} size="large" />
        ) : (
          <TouchableOpacity onPress={onLogoutPress}>
            <Text style={styles.text}>{translations['settings.logout']}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
