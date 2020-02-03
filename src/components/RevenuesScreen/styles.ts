import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../styles';
import { commonStyles } from '../../styles/commonStyles';

export default StyleSheet.create({
  container: {
    width: Metrics.fullWidth,
    backgroundColor: Colors.WHITE,
    ...commonStyles.flexSpaceBetweenRow,
    paddingTop: Metrics.mediumPadding,
  },
  leftView: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: Metrics.averagePadding,
    paddingVertical: Metrics.averagePadding,
  },
  title: {
    fontSize: Metrics.mediumTextSize,
    paddingBottom: Metrics.smallMargin,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: Metrics.titleTextSize,
    color: Colors.BACHGROUND,
  },
  dialog: {
    top: -Metrics.screenHeight / 5,
  },
});
