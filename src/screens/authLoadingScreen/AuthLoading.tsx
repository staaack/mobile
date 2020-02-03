import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { Colors } from '../../styles/theme/colors';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthLoading: NavigationStackScreenComponent<{}, {}> = ({
  navigation,
}): JSX.Element => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const userToken: string | null = await AsyncStorage.getItem('userToken');

    navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
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
