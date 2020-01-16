import React, { useEffect, Fragment } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Platform, StatusBar } from 'react-native';
import NavigationContainer from './navigation/stackNavigator/NavigationContainer';

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    return SplashScreen.hide();
  }, []);
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer />
    </Fragment>
  );
};
export default App;
