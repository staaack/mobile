import React, { useEffect, Fragment } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, Platform, StatusBar } from 'react-native';

const App: React.SFC<{}> = (): JSX.Element => {
  useEffect(() => {
    return SplashScreen.hide();
  }, []);
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <View>
        <Text>THis is the Staack App</Text>
      </View>
    </Fragment>
  );
};
export default App;
