import { StyleSheet } from 'react-native';
import Colors from '../../../../../styles/theme/colors';
import Metrics from '../../../../../styles/Metrics';
import commonStyles from '../../../../../styles/commonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    ...commonStyles.flexWrapList,
    padding: Metrics.averageMargin,
    minHeight: Metrics.screenHeight / 2,
    backgroundColor: Colors.LIGHT_GREY,
  },
  tabViewContent: {
    flex: 1,
  },
});
