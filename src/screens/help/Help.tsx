import React from 'react';
import { View } from 'react-native';
import { NavStateless } from '../auth/loginScreen/Login';

const Help: NavStateless = (): JSX.Element => {
  return <View></View>;
};

Help.navigationOptions = {
  headerShown: true,
  headerTitle: 'Help',
};

export default Help;
