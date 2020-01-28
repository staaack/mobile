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
    fontFamily: "Poppins",
    fontWeight: 'normal',
    color: Colors.GREY,
    fontSize: 12
  },
  amount: {
    fontFamily: "Poppins",
    fontWeight: 'bold',
    fontSize: 16,
  },
});
