import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import RevenuesTitle from '../RevenuesTitle';
import RevenuesProgress from '../RevenuesProgress';
import { RevenuesDescription } from '../revenuesDescription';
import { percentageCalculator } from '../../../../helpers';

interface Props {
  revenues: Array<string>[3];
}

export const Revenues: React.SFC<Props> = React.memo(({ revenues }) => {
  const currentRev = revenues[1][2].replace(/,/g, '');
  const objectiveRev = revenues[0][2].replace(/,/g, '');

  const currentNbr: string = currentRev.substring(0, currentRev.length - 1);
  const objectiveNbr: string = objectiveRev.substring(
    0,
    objectiveRev.length - 1,
  );

  const revenuesPercentage = React.useMemo(
    () => percentageCalculator(parseInt(objectiveNbr), parseInt(currentNbr)),
    [revenues],
  );

  return (
    <View style={styles.container}>
      <RevenuesTitle />
      <RevenuesProgress percentage={revenuesPercentage} />
      <RevenuesDescription
        current={revenues[1][2]}
        objective={revenues[0][2]}
      />
    </View>
  );
});
