import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { ProfileTabView, UserDescription } from './components';
import { RightHeaderIcon, LeftHeaderIcon } from '../../components/header';
import db from '../../database/db';
import styles from './styles';
import { headerStyles } from '../../components/header/styles';
import { TGlobalContext, GlobalContext } from '../../context';
import { teamMemberFinderById } from '../../helpers/teamMemberFinder';
import { Spinner } from '../../components/spinner';
import { engineerFinderById } from '../../helpers/engineerFinder';
import { SET_SELECTED_MEMBER } from '../../hooksGlobalState';

const company = db[0];

/**
 * @description navigation stateless functional component type
 * @param (props) `NavigationStackScreenComponent<any>`
 */

export const UserProfile: NavigationStackScreenComponent = ({
  navigation,
}): JSX.Element => {
  const { state, dispatch } = React.useContext<TGlobalContext>(GlobalContext);

  const members = state!.data['User information'];
  const engineering = state!.data['Engineering'];

  useEffect(() => {
    const dispatchAction = () => {
      const engineer = engineerFinderById(
        engineering,
        navigation.getParam('id'),
      );

      dispatch({
        type: SET_SELECTED_MEMBER,
        payload: engineer,
      });
    };

    dispatchAction();
  }, []);

  const member = React.useMemo(
    () => teamMemberFinderById(members, navigation.getParam('id')),
    [members.length],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />
      {typeof member !== 'undefined' ? (
        <ScrollView style={styles.scrollView}>
          <UserDescription person={member} />
          <ProfileTabView />
        </ScrollView>
      ) : (
        <Spinner size="large" />
      )}
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
