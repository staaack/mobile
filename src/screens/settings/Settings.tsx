import React, { useContext, useState } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { GoogleSignin } from '@react-native-community/google-signin';

import { LeftHeaderIcon, headerStyles } from '../../components/header';
import { LogoutButton } from '../../components/logoutButton';
import { LocalizationContext, TContextValue } from '../../localization';
import { DisplaySalarySwitch as Switch } from './components';
import styles from './styles';
import { View } from 'react-native';

let headerTitle: string = '';

const SettingsScreen: NavigationStackScreenComponent<NavigationInjectedProps> = React.memo(
  ({ navigation }): JSX.Element => {
    const { translations } = useContext<TContextValue>(LocalizationContext);
    headerTitle = translations['settings.headerTitle'];

    const [loading, setLoading] = useState<boolean>(false);

    const _onLogoutPress: () => void = React.useCallback(() => {
      setLoading(true);

      Promise.all([GoogleSignin.revokeAccess(), GoogleSignin.signOut()])
        .then(() => {
          setLoading(false);
          navigation.navigate('Login');
        })
        .catch((err: any) => {
          console.log('Logout: ', err);
          setLoading(false);
        });
    }, []);

    return (
      <View style={styles.container}>
        <Switch />
        <LogoutButton isLoading={loading} onLogoutPress={_onLogoutPress} />
      </View>
    );
  },
);

SettingsScreen.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  hheaderTitle: headerTitle,
  headerStyle: headerStyles.header,
  headerTitleStyle: headerStyles.headerTitle,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => navigation.goBack()} />,
});

export const Settings = withNavigation(SettingsScreen);
