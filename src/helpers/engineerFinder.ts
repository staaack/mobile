import images from '../assets/images';
import { IPerson } from '../screens/userProfile/components';
import { TEngineering } from '../hooksGlobalState';

/**
 * @description Finds the associated member by it's ID
 * @param members
 * @param id
 */
export function engineerFinderById(
  engineers: String[],
  id: string,
): TEngineering | undefined {
  for (let i = 0; engineers; i++) {
    const engineer = engineers[i];
    if (engineer[0] === id)
      return {
        id,
        currentProject: engineer[2],
        dailyRate: engineer[3],
        hrAndProfileContribution: engineer[12],
        marketingContribution: engineer[15],
        rAndDContribution: engineer[14],
        educationContribution: engineer[4],
      };
  }
  return;
}
