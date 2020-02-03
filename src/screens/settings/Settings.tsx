import React, { useContext } from 'react';
import { View } from 'react-native';

import { NavigationSFC } from '../userProfile/UserProfile';

import { LeftHeaderIcon, headerStyles } from '../../components/header';
import { LogoutButton } from '../../components/logoutButton';
import { LocalizationContext, TContextValue } from '../../localization';
import { DisplaySalarySwitch as Switch } from './components';
import styles from './styles';

let headerTitle: string = '';

export const Settings: NavigationSFC = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  headerTitle = translations['settings.headerTitle'];

  return (
    <View style={styles.container}>
      <Switch />
      <LogoutButton />
    </View>
  );
};

Settings.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  hheaderTitle: headerTitle,
  headerStyle: headerStyles.header,
  headerTitleStyle: headerStyles.headerTitle,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => navigation.goBack()} />,
});
