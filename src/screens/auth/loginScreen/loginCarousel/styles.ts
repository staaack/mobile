import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/theme/colors';
import { Metrics } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  commonDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotStyle: {
    backgroundColor: Colors.MAIN_COLOR,
  },
  inactiveDotsStyle: {
    backgroundColor: Colors.GREY,
  },
  sliderItem: {
    width: Metrics.screenWidth,
    marginLeft: 10,
    height: 120,
    padding: 10,
  },
});
