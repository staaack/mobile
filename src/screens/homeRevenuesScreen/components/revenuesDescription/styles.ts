import { StyleSheet } from 'react-native';

import { Metrics, Colors, commonStyles } from '../../../../styles';

export default StyleSheet.create({
  container: {
    ...commonStyles.flexSpaceBetweenRow,
  },
  money: {
    ...commonStyles.flexCentered,
  },
  title: {
    color: Colors.GREY,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: Metrics.mediumTextSize,
  },
});
