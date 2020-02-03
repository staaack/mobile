import { StyleSheet } from 'react-native';

import { Colors, Metrics, commonStyles } from '../../styles';

export const headerStyles = StyleSheet.create({
  container: {
    ...commonStyles.absoluteView,
    height: 70,
    width: Metrics.fullWidth,
    marginTop: Metrics.basisMarginTop,
    paddingHorizontal: Metrics.bigPadding,
    paddingTop: Metrics.smallPadding,
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: Metrics.borderWidth,
    ...commonStyles.flexSpaceBetweenRow,
  },
  iconRight: {
    marginRight: Metrics.bigMargin,
  },
  iconLeft: {
    marginLeft: Metrics.bigMargin,
  },
  menuPopup: {
    top: -Metrics.screenHeight / 2.8,
  },
  header: {
    ...commonStyles.commonBorderStyle,
    borderWidth: Metrics.smallBorderWidth,
    ...commonStyles.removeShadow,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
});
