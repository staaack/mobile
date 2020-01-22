import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

import { LoginCarousel } from './components/loginCarousel';
import { LoginButton } from './components/loginButton';
import styles from './styles';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

export interface TLoginProps {
  navigation: StackNavigationProp;
}

export interface NavStateless extends React.StatelessComponent<TLoginProps> {
  navigationOptions?: NavigationStackOptions;
}

const Login: NavStateless = ({ navigation }): JSX.Element => {
  const onButtonPress: () => void = () => {
    return navigation.navigate({ routeName: 'HomeRevenues' });
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
