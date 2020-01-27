import { StyleSheet } from 'react-native';
import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.paddingForStatusBar,
    padding: Metrics.averagePadding,
    backgroundColor: Colors.WHITE,
    width: '100%',
    position: 'absolute',
    top: -10,
    zIndex: 9999,
    minHeight: Metrics.screenHeight / 4,
  },
  content: {
    ...commonStyles.flexSpaceBetweenRow,
    padding: Metrics.averagePadding,
  },
});
