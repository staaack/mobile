import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { LoginCarousel } from './components/loginCarousel';
import { LoginButton } from './components/loginButton';
import styles from './styles';

interface TLoginParams {}

interface TLoginProps {}

const Login: React.SFC<NavigationStackScreenProps<
  TLoginParams,
  TLoginProps
>> = ({ navigation }): JSX.Element => {
  const onButtonPress: () => void = () => {
    return navigation.navigate('HomeRevenues');
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
          <LoginButton onButtonPress={onButtonPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
