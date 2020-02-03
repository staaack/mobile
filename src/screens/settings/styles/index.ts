import { StyleSheet } from 'react-native';
import { Metrics, commonStyles } from '../../../styles';

export default StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: Metrics.averagePadding,
  },
  header: {
    ...commonStyles.commonBorderStyle,
    borderWidth: Metrics.smallBorderWidth,
    ...commonStyles.removeShadow,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
  displaySalary: {
    ...commonStyles.flexSpaceBetweenRow,
    marginBottom: Metrics.bigMargin,
  },
});
