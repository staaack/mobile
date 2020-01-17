import { Dimensions } from 'react-native';

export default {
  screenWidth: Math.round(Dimensions.get('window').width),
  screenHeight: Math.round(Dimensions.get('window').height),
  bigTextSize: 20,
  averagePadding: 10,
  smallPadding: 5,
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
