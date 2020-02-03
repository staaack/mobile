import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.paddingForStatusBar,
    paddingHorizontal: Metrics.mediumPadding,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    width: Metrics.fullWidth,
    top: -10,
    zIndex: 9999,
    justifyContent: 'center',
    minHeight: Metrics.screenHeight / 4.5,
    padding: Metrics.averagePadding,
  },
});
