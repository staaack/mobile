import { StyleSheet } from 'react-native';

import commonStyles from '../../styles/commonStyles';
import Metrics from '../../styles/Metrics';
import Colors from '../../styles/theme/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 100,
    width: Metrics.screenWidth / 2.3,
    ...commonStyles.shadow,
    paddingVertical: Metrics.averagePadding,
    paddingHorizontal: Metrics.averagePadding + 3,
    backgroundColor: Colors.WHITE,
    margin: Metrics.smallMargin,
    marginBottom: Metrics.averageMargin,
    borderRadius: 5,
  },
  iconsContainer: {
    width: '100%',
    ...commonStyles.flexSpaceBetweenRow,
    marginBottom: Metrics.averageMargin,
  },
  topicContainer: {
    ...commonStyles.flexStart,
  },
  iconWrapper: {
    padding: Metrics.smallPadding,
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 20,
  },
  amount: {
    fontWeight: 'bold',
    color: Colors.MAIN_COLOR,
    fontSize: Metrics.mediumTextSize,
    fontFamily: 'sans-serif',
  },
});
