import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../styles';
import { Colors } from '../../../../styles/theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.averagePadding,
    paddingVertical: Metrics.averagePadding,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
});
