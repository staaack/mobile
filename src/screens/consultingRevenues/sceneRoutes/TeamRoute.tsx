import React from 'react';
import { SearchListTab } from '../../../components/searchListTab';

import db from '../../../database/db';
import { ListItemProps } from '../../../components/list';
import RouteWrapper from '../../homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';

interface Props {}

const teamMembers: Array<ListItemProps> = db[0].team.map(item => {
  return {
    imageURL: item.imageURL,
    title: item.name,
    surTitle: item.role,
    cost: item.salary,
  };
});

export const TeamRoute: React.SFC<Props> = (): JSX.Element => {
  return (
    <RouteWrapper>
      <SearchListTab
        placeholder="Search team"
        data={teamMembers}
        onSearchBarTextChange={() => {}}
      />
    </RouteWrapper>
  );
};
