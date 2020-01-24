import { StyleSheet } from 'react-native';

import commonStyles from '../../styles/commonStyles';
import Colors from '../../styles/theme/colors';
import Metrics from '../../styles/Metrics';

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
  },
});
