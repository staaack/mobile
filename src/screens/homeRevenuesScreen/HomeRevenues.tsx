import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, KeyboardAvoidingView, StatusBar } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

import { TLoginProps } from '../auth/loginScreen/Login';
import styles from './styles';
import database from '../../database/db';
import { ScrollView } from 'react-native-gesture-handler';
import CompanyDetails from './components/CompanyDetails';
import { Revenues } from './components/revenues';
import { RevenuesTabView } from './components/revenuesTabView';

const company = database[0];

interface TProps extends TLoginProps {}

interface NavStatelessComponent extends React.StatelessComponent<TProps> {
  navigationOptions?: NavigationStackOptions;
}

const HomeRevenues: NavStatelessComponent = (): JSX.Element => {
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
          enabled
        >
          <Revenues />
          <RevenuesTabView />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeRevenues;
