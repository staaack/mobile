import { StyleSheet } from 'react-native';

import { commonStyles, Metrics, Colors } from '../../styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '48%',
    minWidth: '35%',
    flexGrow: 1,
    ...commonStyles.shadow,
    paddingVertical: 18,
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
    marginTop: Metrics.averageMargin,
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
    fontFamily: 'Poppins',
  },
  icon: { width: 20, height: 20 },
});
