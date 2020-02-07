import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { LocalizationProvider } from './localization';
import { AppStackNavigator } from './navigation';
import { GlobalStateProvider } from './context';
import { AppStackContainer } from './navigation';

console.disableYellowBox = true;

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />
      <GlobalStateProvider>
        <LocalizationProvider>
          <AppStackNavigator />
        </LocalizationProvider>
      </GlobalStateProvider>
      <LocalizationProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <AppStackContainer />
      </LocalizationProvider>
    </SafeAreaProvider>
  );
};
export default App;
