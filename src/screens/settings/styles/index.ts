import { StyleSheet } from 'react-native';
import { Metrics, commonStyles } from '../../../styles';

export default StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: Metrics.averagePadding,
  },
  header: {
    ...commonStyles.commonBorderStyle,
    borderWidth: 0.2,
    ...commonStyles.removeShadow,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize + 1,
  },
  displaySalary: {
    ...commonStyles.flexSpaceBetweenRow,
    marginBottom: Metrics.bigMargin,
  },
});
