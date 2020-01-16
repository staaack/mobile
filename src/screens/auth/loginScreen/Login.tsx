import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

import { LoginCarousel } from './loginCarousel';
import { LoginButton } from './loginButton';
import styles from './styles';

interface TProps {}

interface NavStateless extends React.StatelessComponent<TProps> {
  navigationOptions?: NavigationStackOptions;
}

const Login: NavStateless = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
