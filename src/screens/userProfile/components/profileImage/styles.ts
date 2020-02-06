import { StyleSheet } from 'react-native';
import {
  Metrics,
  elevationShadowStyle,
  commonStyles,
} from '../../../../styles';

export const styles = StyleSheet.create({
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: Metrics.averageRadius,
    marginBottom: Metrics.mediumMargin,
    ...elevationShadowStyle(7),
    overflow: 'hidden',
    ...commonStyles.flexCentered,
  },
  image: {
    width: Metrics.fullWidth,
    height: Metrics.fullHeight,
  },
});
