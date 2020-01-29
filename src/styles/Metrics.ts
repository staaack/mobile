import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const Metrics = {
  screenWidth,
  screenHeight,
  radiusBasis: 20,
  bigTextSize: 20,
  titleTextSize: 24,
  sliderTextSize: 28,
  mediumTextSize: 18,
  smallTextSize: 15,
  tinyTextSize: 12,
  averagePadding: 10,
  smallPadding: 8,
  tinyPadding: 5,
  paddingForStatusBar: 40,
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
