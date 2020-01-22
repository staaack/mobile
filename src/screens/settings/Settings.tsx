import React from 'react';
import { View } from 'react-native';
import { NavStateless } from '../auth/loginScreen/Login';

const Settings: NavStateless = (): JSX.Element => {
  return <View></View>;
};

Settings.navigationOptions = {
  headerShown: true,
  headerTitle: 'Settings',
};

export default Settings;
