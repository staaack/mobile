import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { LocalizationProvider } from './localization';
import { AppStackContainer } from './navigation';
import { GlobalStateProvider } from './context';

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
          <AppStackContainer />
        </LocalizationProvider>
      </GlobalStateProvider>
    </SafeAreaProvider>
  );
};
export default App;
