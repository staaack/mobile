import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

import { TLoginProps } from '../auth/loginScreen/Login';
import styles from './styles';
import database from '../../database/db';
import { ScrollView } from 'react-native-gesture-handler';
import CompanyDetails from './CompanyDetails';
import { Revenues } from './revenues';
import { TabView } from '../../components/tabView';

const company = database[0];

interface TProps extends TLoginProps {}

interface NavStatelessComponent extends React.StatelessComponent<TProps> {
  navigationOptions?: NavigationStackOptions;
}

const HomeRevenues: NavStatelessComponent = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CompanyDetails
          companyName={company.name}
          imageURI={company.profilePic}
        />
        <ScrollView style={styles.scrollView}>
          <Revenues />
          <TabView />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeRevenues;
