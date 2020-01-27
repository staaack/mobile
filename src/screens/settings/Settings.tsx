import React from 'react';
import { View } from 'react-native';

import { NavigationSFC } from '../userProfile/UserProfile';

import { LeftHeaderIcon, headerStyles } from '../../components/header';
import { LogoutButton } from '../../components/logoutButton';
import { DisplaySalarySwitch as Switch } from './components';
import styles from './styles';

export const Settings: NavigationSFC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Switch />
      <LogoutButton />
    </View>
  );
};

Settings.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  headerTitle: 'Settings',
  headerStyle: headerStyles.header,
  headerTitleStyle: headerStyles.headerTitle,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => navigation.goBack()} />,
});
