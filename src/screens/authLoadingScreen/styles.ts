import { StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';
import { Metrics } from '../../styles/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexCentered,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: Metrics.mediumMargin,
  },
});
