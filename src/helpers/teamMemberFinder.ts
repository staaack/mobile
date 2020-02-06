import images from '../assets/images';
import { IPerson } from '../screens/userProfile/components';

/**
 * @description Finds the associated member by it's ID
 * @param members
 * @param id
 */
export function teamMemberFinderById(
  members: String[],
  id: string,
): IPerson | undefined {
  for (let i = 0; members; i++) {
    const member = members[i];
    if (member[0] === id)
      return {
        id,
        imageURL: images.PERSON,
        name: member[3],
        role: member[1],
      };
  }
  return;
}
