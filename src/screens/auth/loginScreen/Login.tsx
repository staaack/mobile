import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

interface Props {}

const Login: React.FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo_splash.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Login;
