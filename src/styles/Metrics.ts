import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default {
  screenWidth,
  screenHeight,
  bigTextSize: 20,
  mediumTextSize: 17,
  averagePadding: 10,
  smallPadding: 8,
  bigPadding: 25,
  averageMargin: 10,
  smallMargin: 5,
  bigMargin: 25,
  smallRoundedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
};
