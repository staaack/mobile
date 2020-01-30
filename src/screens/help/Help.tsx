import React, { useContext } from 'react';
import { View } from 'react-native';

import { NavigationSFC } from '../userProfile';
import { LeftHeaderIcon, headerStyles } from '../../components/header';
import { TContextValue, LocalizationContext } from '../../localization';

let headerTitle: string = '';

export const Help: NavigationSFC = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  headerTitle = translations['help.headerTitle'];

  return <View></View>;
};

Help.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  headerTitle: headerTitle,
  headerStyle: headerStyles.header,
  headerTitleStyle: headerStyles.headerTitle,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => navigation.goBack()} />,
});

export default Help;
