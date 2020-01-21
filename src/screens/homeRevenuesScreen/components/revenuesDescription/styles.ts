import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/theme/colors';
import commonStyles from '../../../../styles/commonStyles';
import { Metrics } from '../../../../styles';

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
