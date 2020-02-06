import React from 'react';
import images from '../../../assets/images';

import { SearchListTab } from '../../../components/searchListTab';
import { ListItemProps } from '../../../components/list';
import db from '../../../database/db';

interface Props {}

const projects: Array<ListItemProps> = db[0].projects.map(
  ({ name, description, revenues }: any) => ({
    title: name,
    surTitle: description,
    imageURL: images.COMPANY_IMG_URI,
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
