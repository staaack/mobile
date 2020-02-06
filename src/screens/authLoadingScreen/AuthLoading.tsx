import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { Colors } from '../../styles/theme/colors';
import styles from './styles';
import { googleAuthConfig } from '../auth/config/index';

GoogleSignin.configure(googleAuthConfig);

export const AuthLoading: NavigationStackScreenComponent<{}, {}> = ({
  navigation,
}): JSX.Element => {
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
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor="white"
      />
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo_splash.png')}
          style={styles.logo}
        />
        <ActivityIndicator color={Colors.MAIN_COLOR} size="large" />
      </View>
    </SafeAreaView>
  );
};
