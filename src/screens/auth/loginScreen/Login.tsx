import React, { useContext } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { LoginCarousel } from './components/loginCarousel';
import { LoginButton } from './components/loginButton';

import { LocalizationContext, TContextValue } from '../../../localization';

import styles from './styles';

interface TLoginParams {}

interface TLoginProps {}

export const LoginScreen: React.SFC<NavigationStackScreenProps<
  TLoginParams,
  TLoginProps
>> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onButtonPress: () => void = () => {
    return navigation.navigate('HomeRevenues');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} testID="loginView">
        <Image
          source={require('../../../assets/logo_splash.png')}
          style={styles.logo}
          testID="hackages_logo"
        />
        <View style={styles.bottomLoginSide}>
          <LoginCarousel />
          <LoginButton
            loginText={translations['login.button']}
            onButtonPress={onButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
