import { StyleSheet } from 'react-native';

import { Colors, Metrics } from '../../styles';
import { commonStyles } from '../../styles/commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexCentered,
    paddingTop: Metrics.averagePadding,
    padding: Metrics.smallPadding,
    borderRadius: Metrics.bigRadius,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: Metrics.fullWidth,
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: Metrics.bigRadius,
  },
  progress: {
    backgroundColor: Colors.MAIN_COLOR,
    borderRadius: Metrics.bigRadius,
  },
});
