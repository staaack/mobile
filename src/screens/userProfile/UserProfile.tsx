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

interface TProfileParams {}

interface TProfileProps {}

// navigation stateless functional component type
export interface NavigationSFC
  extends React.StatelessComponent<
    NavigationStackScreenProps<TProfileParams, TProfileProps>
  > {
  navigationOptions?: NavigationStackOptions;
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
        <UserDescription />
        <ProfileTabView />
      </ScrollView>
    </SafeAreaView>
  );
};

UserProfile.navigationOptions = {
  headerShown: true,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => console.log('hello')} />,
  headerRight: () => <RightHeaderIcon />,
  headerTitle: '',
};

export default UserProfile;
