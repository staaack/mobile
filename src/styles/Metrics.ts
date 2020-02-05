import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const Metrics = {
  // ******* For text Sizes ****** //
  sliderTextSize: 24,
  titleTextSize: 24,
  bigTextSize: 20,
  mediumTextSize: 18,
  smallTextSize: 16,
  tinyTextSize: 12,
  // ******* For paddings ****** //
  tinyPadding: 5,
  smallPadding: 8,
  averagePadding: 10,
  mediumPadding: 15,
  bigPadding: 25,
  basisPaddingTop: 20,
  basisPaddingBottom: 20,
  paddingForStatusBar: 40,
  // ******* For Margins ****** //
  tinyMargin: 5,
  smallMargin: 5,
  averageMargin: 10,
  mediumMargin: 15,
  bigMargin: 25,
  basisMarginTop: 20,
  basisMarginBottom: 20,
  // ******* For images, borders, screen metrcis... ****** //
  screenWidth,
  screenHeight,
  smallWidth: 10,
  smallHeight: 10,
  averageRadius: 10,
  bigRadius: 50,
  radiusBasis: 20,
  smallRadius: 5,
  smallRoundedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  borderWidth: 1,
  smallBorderWidth: 0.4,
  smallIcon: {
    width: 20,
    height: 20,
  },
  logoMetrics: {
    top: 50,
    left: 10,
    width: 80,
    height: 80,
  },
  fullWidth: '100%',
  fullHeight: '100%',
  tabItemBorderWidth: 4,
};
