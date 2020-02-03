import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';

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

  const [loading, setLoading] = useState<boolean>();

  const _onLogoutPress: () => void = async () => {
    setLoading(true);

    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('SignOut Error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Switch />
      <LogoutButton isLoading={loading} onLogoutPress={_onLogoutPress} />
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
