import React, { ReactElement, useCallback } from 'react';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import { ListItemProps } from '../../../../../components/list';

import RouteWrapper from './RouteWrapper';
import { SearchListTab } from '../../../../../components/searchListTab';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import db from '../../../../../database/db';

const teamMembers: Array<ListItemProps> = db[0].team.map((item: any) => {
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
  navigation,
}): ReactElement => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);
  const onChangeText = useCallback((text: string) => {
    console.log(text);
  }, []);

  const onViewProfilePress: (name: string) => void = name => {
    navigation!.navigate('UserProfile');
  };

  return (
    <RouteWrapper>
      <SearchListTab
        data={teamMembers}
        onRightTextPress={onViewProfilePress}
        placeholder={translations['searchbar.team']}
        onSearchBarTextChange={onChangeText}
        rightText={translations['home.viewProfile']}
      />
    </RouteWrapper>
  );
};

// @ts-ignore
export const TeamRoute = withNavigation(Team);
