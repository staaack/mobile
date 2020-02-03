import { StyleSheet } from 'react-native';
import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: Metrics.fullWidth,
    top: -10,
    zIndex: 9999,
    justifyContent: 'flex-end',
    minHeight: Metrics.screenHeight / 4,
    padding: Metrics.averagePadding,
    paddingTop: Metrics.paddingForStatusBar,
    backgroundColor: Colors.WHITE,
  },
  content: {
    ...commonStyles.flexSpaceBetweenRow,
  },
});
