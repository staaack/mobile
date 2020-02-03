import { StyleSheet } from 'react-native';

import { Metrics, Colors, commonStyles } from '../../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.averagePadding,
  },
  commonDotStyle: {
    width: Metrics.smallWidth,
    height: Metrics.smallHeight,
    borderRadius: Metrics.smallRadius,
  },
  dotStyle: {
    backgroundColor: Colors.MAIN_COLOR,
  },
  inactiveDotsStyle: {
    backgroundColor: Colors.GREY,
  },
  sliderItem: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 5,
    paddingHorizontal: Metrics.smallPadding,
    ...commonStyles.flexStartCenterContent,
  },
});
