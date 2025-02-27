import { StyleSheet } from 'react-native';

import { commonStyles, Metrics, Colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight / 3,
    ...commonStyles.flexCentered,
    paddingTop: Metrics.basisPaddingTop,
  },
  userName: {
    color: Colors.BACHGROUND,
    fontSize: Metrics.mediumTextSize,
    fontWeight: '700',
  },
  smallText: { color: Colors.TEXT_GREY, fontSize: Metrics.tinyTextSize },
  popup: {
    position: 'absolute',
    top: 15,
    right: Metrics.averageMargin,
  },
  dialog: {
    top: -Metrics.screenHeight / 4.3,
  },
});
