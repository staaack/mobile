import React, { useCallback } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { RouteWrapper } from './RouteWrapper';
import { SearchListTab } from '../../../../../components/searchListTab';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../../localization';
import { TGlobalContext, GlobalContext } from '../../../../../context';
import { membersExtractor } from '../../../../../helpers';

export interface ITeamRouteProps {}

export const Team: React.SFC<NavigationInjectedProps<ITeamRouteProps>> = ({
  navigation,
}): JSX.Element => {
  const { translations } = React.useContext<TContextValue>(LocalizationContext);

  const { state } = React.useContext<TGlobalContext>(GlobalContext);

  const membersList = React.useMemo(
    () => membersExtractor(state!.data['User information']),
    [state.data],
  );

  const onChangeText = (text: string) => console.log(text);

  const onViewProfilePress: (id: string) => void = id => {
    navigation.navigate({ routeName: 'UserProfile', params: { id } });
  };

  return (
    <RouteWrapper>
      <SearchListTab
        data={membersList}
        onRightTextPress={onViewProfilePress}
        placeholder={translations['searchbar.team']}
        onSearchBarTextChange={onChangeText}
        rightText={translations['home.viewProfile']}
      />
    </RouteWrapper>
  );
};

export const TeamRoute = withNavigation(Team);
