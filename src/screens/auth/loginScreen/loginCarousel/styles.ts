import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  commonDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  dotStyle: {
    backgroundColor: Colors.MAIN_COLOR,
  },
  inactiveDotsStyle: {
    backgroundColor: Colors.GREY,
  },
});
