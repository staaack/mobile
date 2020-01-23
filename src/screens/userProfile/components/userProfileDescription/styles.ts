import { StyleSheet } from 'react-native';
import { commonStyles, Metrics } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight / 3,
    ...commonStyles.flexCentered,
  },
});
