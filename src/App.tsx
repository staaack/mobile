import React, { useEffect, useReducer, ReducerAction } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { globalReducer } from './hooksGlobalState/reducers';
import { LocalizationProvider } from './localization';
import { AppStackNavigator } from './navigation';
import { initialState } from './hooksGlobalState/initialStates/initialState';
import { GlobalContext } from './context/globalContext';

console.disableYellowBox = true;

const App: React.SFC<{}> = (): JSX.Element => {
  const [state, dispatch] = useReducer<any, ReducerAction<any>>(
    globalReducer,
    initialState,
    () => {}, // this is the initializer function without action or type
  );

  useEffect(() => {
    SplashScreen.hide();
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <GlobalContext.Provider value={{ state, dispatch }}>
        <LocalizationProvider>
          <AppStackNavigator />
        </LocalizationProvider>
      </GlobalContext.Provider>
    </SafeAreaProvider>
  );
};
export default App;
