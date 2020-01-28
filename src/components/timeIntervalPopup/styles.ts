import { StyleSheet } from 'react-native';

import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    ...commonStyles.flexSpaceBetweenRow,
  },
  text: {
    color: Colors.MAIN_COLOR,
    fontWeight: '700',
    fontSize: 13,
    marginRight: Metrics.averageMargin,
    fontFamily: "Poppins"
  },
});
