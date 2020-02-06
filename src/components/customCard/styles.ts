import { StyleSheet } from 'react-native';

import { commonStyles, Metrics, Colors } from '../../styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexSpaceBetweenAlignStart,
    maxWidth: '48%',
    minWidth: '35%',
    maxHeight: 200,
    flexGrow: 1,
    ...commonStyles.shadow,
    paddingVertical: 18,
    paddingHorizontal: Metrics.averagePadding + 3,
    backgroundColor: Colors.WHITE,
    margin: Metrics.smallMargin,
    marginBottom: Metrics.averageMargin,
    borderRadius: Metrics.smallRadius,
  },
  iconsContainer: {
    width: Metrics.fullWidth,
    ...commonStyles.flexSpaceBetweenRow,
    marginBottom: Metrics.averageMargin,
  },
  topicContainer: {
    ...commonStyles.flexStart,
    marginTop: Metrics.averageMargin,
  },
  iconWrapper: {
    padding: Metrics.smallPadding,
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: Metrics.radiusBasis,
  },
  title: {
    fontWeight: 'normal',
    fontSize: Metrics.tinyTextSize,
  },
  amount: {
    fontWeight: 'bold',
    color: Colors.MAIN_COLOR,
    fontSize: Metrics.mediumTextSize,
    flexWrap: 'nowrap',
  },
  icon: Metrics.smallIcon,
});
