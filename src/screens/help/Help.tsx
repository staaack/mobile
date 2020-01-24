import React from 'react';
import { View } from 'react-native';

import { NavigationSFC } from '../userProfile/UserProfile';
import LeftHeaderIcon from '../../components/header/LeftHeaderIcon';
import headerStyles from '../../components/header/styles';

const Help: NavigationSFC = (): JSX.Element => {
  return <View></View>;
};

Help.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  headerTitle: 'Help',
  headerStyle: headerStyles.header,
  headerTitleStyle: headerStyles.headerTitle,
  headerLeft: () => <LeftHeaderIcon onIconPress={() => navigation.goBack()} />,
});

export default Help;
