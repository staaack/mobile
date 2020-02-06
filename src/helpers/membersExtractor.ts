import images from '../assets/images';
import { ListItemProps } from '../components/list/List';

export const membersExtractor: (
  members: String[],
) => ListItemProps[] = members =>
  members.map((member: any) => {
    return {
      id: member[0],
      imageURL: images.PERSON,
      title: member[1],
      surTitle: member[4],
    };
  });
