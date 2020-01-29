import React from 'react';

import { SearchListTab } from '../../../components/searchListTab';
import { ListItemProps } from '../../../components/list';
import db from '../../../database/db';

interface Props {}

const clientsList: Array<ListItemProps> = db[0].clients.map(
  ({ name, description, imageURL, revenues }) => ({
    title: name,
    surTitle: description,
    imageURL,
    cost: revenues,
  }),
);

export const ClientsRoute: React.SFC<Props> = (): JSX.Element => {
  return (
    <SearchListTab
      data={clientsList}
      placeholder="Search Client"
      onSearchBarTextChange={() => {}}
    />
  );
};
