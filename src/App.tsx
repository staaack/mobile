import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LocalizationProvider } from './localization';
import { AppStackNavigator } from './navigation';

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <LocalizationProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <AppStackNavigator />
      </LocalizationProvider>
    </SafeAreaProvider>
  );
};
export default App;
