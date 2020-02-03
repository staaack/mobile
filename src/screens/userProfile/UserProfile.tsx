import React from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';

import { ProfileTabView, UserDescription } from './components';
import { RightHeaderIcon, LeftHeaderIcon } from '../../components/header';
import db from '../../database/db';
import styles from './styles';
import { headerStyles } from '../../components/header/styles';

const company = db[0];

interface TProfileParams {}

interface TProfileProps {}

/**
 * @description navigation stateless functional component type
 * @param React.StatelessComponent<NavigationStackScreenProps>
 */
export interface NavigationSFC
  extends React.StatelessComponent<
    NavigationStackScreenProps<TProfileParams, TProfileProps>
  > {
  navigationOptions?: (
    props: NavigationStackScreenProps,
  ) => NavigationStackOptions;
}
export const UserProfile: NavigationSFC = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />
      <ScrollView style={styles.scrollView}>
        <UserDescription person={company.team[2]} />
        <ProfileTabView />
      </ScrollView>
    </SafeAreaView>
  );
};

UserProfile.navigationOptions = ({ navigation }) => {
  return {
    headerShown: true,
    headerLeft: () => (
      <LeftHeaderIcon onIconPress={() => navigation.goBack()} />
    ),
    headerRight: () => <RightHeaderIcon />,
    headerTitle: '',
    headerStyle: headerStyles.header,
  };
};
