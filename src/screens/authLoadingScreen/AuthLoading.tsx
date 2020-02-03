import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { GoogleSignin } from '@react-native-community/google-signin';

import { Colors } from '../../styles/theme/colors';
import styles from './styles';

GoogleSignin.configure();

export const AuthLoading: NavigationStackScreenComponent<{}, {}> = ({
  navigation,
}): JSX.Element => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const isUserSignedIn: boolean = await GoogleSignin.isSignedIn();

    if (isUserSignedIn) navigation.navigate('AppStack');
    else navigation.navigate('AuthStack');
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
