import { StyleSheet } from 'react-native';
import { commonStyles, Metrics, Colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight / 3,
    ...commonStyles.flexCentered,
  },
  userName: {
    color: Colors.BACKGROUND,
    fontSize: Metrics.mediumTextSize,
    fontWeight: '700',
  },
  smallText: { color: Colors.TEXT_GREY, fontSize: Metrics.tinyTextSize },
  popup: {
    position: 'absolute',
    right: 10,
    top: 0,
    marginTop: Metrics.averageMargin,
  },
  dialog: {
    top: -Metrics.screenHeight / 3.8,
  },
});
