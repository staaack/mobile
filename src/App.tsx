import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppStackNavigator } from './navigation';

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    return SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <AppStackNavigator />
    </SafeAreaProvider>
  );
};
export default App;
