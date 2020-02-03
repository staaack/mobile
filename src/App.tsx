import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LocalizationProvider } from './localization';
import { AppStackNavigator } from './navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

console.disableYellowBox = true;

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
    Icon.loadFont();
    
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
