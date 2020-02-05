import React, { useContext } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { LoginCarousel } from './components/loginCarousel';
import { LoginButton } from './components/loginButton';

import { LocalizationContext, TContextValue } from '../../../localization';

import styles from './styles';
import images from '../../../assets/images';

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
      <View style={styles.container}>
        <Image source={images.LOGO_SPLASH} style={styles.logo} />
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
