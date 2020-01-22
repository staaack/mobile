import React, { ReactElement, useCallback } from 'react';
import { View } from 'react-native';

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

const TeamRoute: React.FC<{}> = (): ReactElement => {
  const onChangeText = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <RouteWrapper>
      <View style={styles.tabViewContent}>
        <SearchBar placeholder="Search Team" onChangeText={onChangeText} />
        <List data={teamMembers} rightText="View profile" />
      </View>
    </RouteWrapper>
  );
};
export default TeamRoute;
