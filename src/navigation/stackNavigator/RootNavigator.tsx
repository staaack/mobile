import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/auth/loginScreen';

type RootStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.SFC<{}> = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
