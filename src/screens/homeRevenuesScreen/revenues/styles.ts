import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { Metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    ...commonStyles.flexSpaceBetweenRow,
    padding: Metrics.averagePadding,
  },
});
