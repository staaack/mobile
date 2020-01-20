import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { Metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.averagePadding,
    paddingVertical: Metrics.averagePadding,
    justifyContent: 'space-between',
  },
});
