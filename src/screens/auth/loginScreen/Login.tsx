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

interface TLoginParams {}
interface TLoginProps {}

export const LoginScreen: NavigationStackScreenComponent<
  TLoginProps,
  TLoginParams
> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  const [loading, setLoading] = useState<boolean>(false);

  const onButtonPress: () => Promise<void> = async () => {
    setLoading(true);

    // First we need check if the device has Google Play Services installed.
    return GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      .then(() => GoogleSignin.signInSilently())
      .then((userInfo: User) => {
        console.log(userInfo);
        setLoading(false);
        navigation.navigate('HomeRevenues');
      })
      .catch(error => {
        setLoading(false);
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return;
          case statusCodes.IN_PROGRESS:
            return;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return;
          default:
            return console.log(error);
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
