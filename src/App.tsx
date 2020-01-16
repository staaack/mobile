import React, { useEffect, Fragment } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationContainer from './navigation/stackNavigator/NavigationContainer';

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    return SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer />
    </SafeAreaProvider>
  );
};
export default App;
