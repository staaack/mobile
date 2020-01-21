import { StyleSheet } from 'react-native';

import commonStyles from '../../styles/commonStyles';
import Metrics from '../../styles/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: Metrics.smallPadding,
  },
  iconsContainer: {
    ...commonStyles.flexSpaceBetweenRow,
  },
  topicContainer: {
    ...commonStyles.flexStart,
  },
});
