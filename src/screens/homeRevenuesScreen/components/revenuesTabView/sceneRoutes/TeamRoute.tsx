import React, { ReactElement, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import RouteWrapper from './RouteWrapper';
import { SearchBar } from '../../../../../components/searchBar';
import styles from './styles';
import { List, ListItemProps } from '../../../../../components/list';

import db from '../../../../../database/db';
import { SearchListTab } from '../../../../../components/searchListTab';

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

export const Team: React.FC<TNavigationProps> = ({
  navigation: { navigate },
}): ReactElement => {
  const onChangeText = useCallback((text: string) => {
    console.log(text);
  }, []);

  const onViewProfilePress: (name: string) => void = name => {
    navigate('UserProfile');
  };

  return (
    <SearchListTab
      data={teamMembers}
      onRightTextPress={onViewProfilePress}
      placeholder="Search Team"
      onSearchBarTextChange={onChangeText}
      rightText="View Profile"
    />
  );
};

export const TeamRoute = withNavigation(Team);
