import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationNativeContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigator';

interface TProps {}

const NavigationContainer: React.SFC<TProps> = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationNativeContainer>
        <RootNavigator />
      </NavigationNativeContainer>
    </SafeAreaProvider>
  );
};

export default NavigationContainer;
