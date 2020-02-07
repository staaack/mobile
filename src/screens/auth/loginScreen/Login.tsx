import React, { useContext, useState } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-community/google-signin';

import { LoginCarousel } from './components/loginCarousel';
import { LoginButton } from './components/loginButton';

import { LocalizationContext, TContextValue } from '../../../localization';

import styles from './styles';
import { googleAuthConfig } from '../config/index';

interface TLoginParams {}
interface TLoginProps {}

GoogleSignin.configure(googleAuthConfig);

export const LoginScreen: NavigationStackScreenComponent<
  TLoginProps,
  TLoginParams
> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  const [loading, setLoading] = useState<boolean>(false);

  const onButtonPress: () => Promise<void> = async () => {
    setLoading(true);

    return GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      .then(() => {
        return GoogleSignin.signIn();
      })
      .then((userInfo: User) => {
        setLoading(false);
        navigation.navigate('HomeRevenues');
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return;
          case statusCodes.IN_PROGRESS:
            return;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return;
          default:
            return;
        }
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo_splash.png')}
          style={styles.logo}
        />
        <View style={styles.bottomLoginSide}>
          <LoginCarousel />
          <LoginButton
            isLoading={loading}
            loginText={translations['login.button']}
            onButtonPress={onButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
