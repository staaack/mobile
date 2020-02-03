import { StyleSheet } from 'react-native';
import { Colors, commonStyles, Metrics } from '../../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.fullWidth,
    ...commonStyles.flexWrapList,
    padding: Metrics.averageMargin,
    minHeight: Metrics.screenHeight / 2,
    backgroundColor: Colors.LIGHT_GREY,
  },
  tabViewContent: {
    flex: 1,
  },
});
