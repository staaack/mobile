import React from 'react';
import { View } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

interface TProps {}

interface NavStatelessComponent extends React.StatelessComponent<TProps> {
  navigationOptions?: NavigationStackOptions;
}

const HomeRevenues: NavStatelessComponent = () => {
  return <View />;
};

export default HomeRevenues;
