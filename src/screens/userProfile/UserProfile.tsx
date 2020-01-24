import React from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';

import { UserDescription } from './components/userProfileDescription';
import styles from './styles';
import RightHeaderIcon from '../../components/header/RightHeaderIcon';
import LeftHeaderIcon from '../../components/header/LeftHeaderIcon';
import ProfileTabView from './components/profileTabView/ProfileTabView';
import db from '../../database/db';

const company = db[0];

interface TProfileParams {}

interface TProfileProps {}

// navigation stateless functional component type
export interface NavigationSFC
  extends React.StatelessComponent<
    NavigationStackScreenProps<TProfileParams, TProfileProps>
  > {
  navigationOptions?: (
    props: NavigationStackScreenProps,
  ) => NavigationStackOptions;
}
const UserProfile: NavigationSFC = (): JSX.Element => {
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
  };
};

export default UserProfile;
