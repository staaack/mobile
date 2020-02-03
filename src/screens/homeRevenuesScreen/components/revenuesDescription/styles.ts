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
    fontSize: Metrics.tinyTextSize,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
});
