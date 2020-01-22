import { StyleSheet } from 'react-native';
import Colors from '../../../../../styles/theme/colors';
import Metrics from '../../../../../styles/Metrics';
import commonStyles from '../../../../../styles/commonStyles';

export default StyleSheet.create({
  container: {
    ...commonStyles.flexWrapList,
    padding: Metrics.averageMargin,
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    backgroundColor: Colors.LIGHT_GREY,
  },
  tabViewContent: {
    flex: 1,
    alignItems: 'center',
  },
});
