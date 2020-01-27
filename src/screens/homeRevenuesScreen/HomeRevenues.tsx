import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StatusBar, ScrollView } from 'react-native';
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';

import styles from './styles';
import database from '../../database/db';
import CompanyDetails from './components/CompanyDetails';
import { Revenues } from './components/revenues';
import { RevenuesTabView } from './components/revenuesTabView';

const company = database[0];

interface IProps extends NavigationStackScreenProps {}

interface NavStatelessComponent extends React.StatelessComponent<IProps> {
  navigationOptions?: (
    props: NavigationStackScreenProps,
  ) => NavigationStackOptions;
}

export const HomeRevenues: NavStatelessComponent = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />
      <View style={styles.container}>
        <CompanyDetails
          companyName={company.name}
          imageURI={company.profilePic}
        />
        <ScrollView
          nestedScrollEnabled
          style={styles.scrollView}
          keyboardShouldPersistTaps="always"
        >
          <Revenues />
          <RevenuesTabView />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
