import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../styles/Metrics';
import { commonStyles } from '../../../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: Metrics.basisPaddingBottom,
  },
  logo: {
    position: 'absolute',
    ...Metrics.logoMetrics,
  },
  bottomLoginSide: {
    position: 'absolute',
    bottom: 40,
    width: Metrics.fullWidth,
    maxHeight: '82%',
    ...commonStyles.flexCentered,
  },
});
