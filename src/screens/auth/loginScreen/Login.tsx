import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';

import { LoginCarousel } from './loginCarousel';
import { LoginButton } from './loginButton';
import styles from './styles';

interface Props {}

const Login: React.FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo_splash.png')}
          style={styles.logo}
        />
        <View style={styles.bottomLoginSide}>
          <LoginCarousel />
          <LoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
