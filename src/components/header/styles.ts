import { StyleSheet } from 'react-native';

import { Colors, Metrics, commonStyles } from '../../styles';

export const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: Metrics.bigPadding,
    paddingTop: Metrics.smallPadding,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    ...commonStyles.flexSpaceBetweenRow,
  },
  iconRight: {
    marginRight: Metrics.bigMargin,
  },
  iconLeft: {
    marginLeft: Metrics.bigMargin,
  },
  menuPopup: {
    top: -Metrics.screenHeight / 3,
  },
  header: {
    ...commonStyles.commonBorderStyle,
    borderWidth: 0.2,
    ...commonStyles.removeShadow,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize + 1,
  },
});
