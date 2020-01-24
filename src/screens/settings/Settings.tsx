import React from 'react';
import { View } from 'react-native';

import { NavigationSFC } from '../userProfile/UserProfile';

import { LogoutButton } from '../../components/logoutButton';
import LeftHeaderIcon from '../../components/header/LeftHeaderIcon';
import styles from './styles';
import headerStyles from '../../components/header/styles';
import DisplaySalarySwitch from './components/DisplaySalarySwitch';

const Settings: NavigationSFC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <DisplaySalarySwitch />
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

export default Settings;
