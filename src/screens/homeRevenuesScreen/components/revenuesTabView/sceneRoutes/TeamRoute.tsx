import React, { ReactElement, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import RouteWrapper from './RouteWrapper';
import SearchBar from '../../../../../components/searchBar/SearchBar';
import styles from './styles';
import List, { ListItemProps } from '../../../../../components/list/List';

import db from '../../../../../database/db';

const teamMembers: Array<ListItemProps> = db[0].team.map(item => {
  return {
    imageURL: item.imageURL,
    title: item.name,
    surTitle: item.role,
  };
});

export interface TNavigationProps {
  navigation?: NavigationStackProp;
}

const TeamRoute: React.FC<TNavigationProps> = ({
  navigation: { navigate },
}): ReactElement => {
  const onChangeText = useCallback((text: string) => {
    console.log(text);
  }, []);

  const onViewProfilePress: (name: string) => void = name => {
    navigate('UserProfile');
  };

  return (
    <RouteWrapper>
      <View style={styles.tabViewContent}>
        <SearchBar placeholder="Search Team" onChangeText={onChangeText} />
        <List
          data={teamMembers}
          rightText="View profile"
          onRightTextPress={onViewProfilePress}
        />
      </View>
    </RouteWrapper>
  );
};
export default withNavigation(TeamRoute);
