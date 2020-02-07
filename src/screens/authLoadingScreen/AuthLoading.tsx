import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { CustomText as Text } from '../../components/TextPoppinsFont/CustomText';

import { Colors } from '../../styles/theme/colors';
import styles from './styles';
import { googleAuthConfig } from '../auth/config/index';
import { TContextValue, LocalizationContext } from '../../localization';

GoogleSignin.configure(googleAuthConfig);

export const AuthLoading: NavigationStackScreenComponent<{}, {}> = ({
  navigation,
}): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = () => {
    GoogleSignin.isSignedIn().then((isUserSignedIn: boolean) => {
      if (isUserSignedIn) navigation.navigate('AppStack');
      else navigation.navigate('AuthStack');
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.WHITE}
        translucent={true}
      />
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo_splash.png')}
          style={styles.logo}
        />
        <View style={styles.spinner}>
          <ActivityIndicator
            color={Colors.MAIN_COLOR}
            size={Platform.OS === 'android' ? 60 : 'large'}
          />
          <Text style={styles.spinnerText}>
            {translations['login.authLoading']}...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
