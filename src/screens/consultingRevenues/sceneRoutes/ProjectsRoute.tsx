import React from 'react';

import { SearchListTab } from '../../../components/searchListTab';
import { ListItemProps } from '../../../components/list';
import db from '../../../database/db';

interface Props {}

const projects: Array<ListItemProps> = db[0].projects.map(
  ({ name, description, imageURL, revenues }) => ({
    title: name,
    surTitle: description,
    imageURL,
    cost: revenues,
  }),
);

export const ProjectsRoute: React.SFC<Props> = (): JSX.Element => {
  return (
    <SearchListTab
      data={projects}
      placeholder="Search project"
      onSearchBarTextChange={() => {}}
    />
  );
};
