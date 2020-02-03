import { StyleSheet, Platform } from 'react-native';
import { Colors } from './theme';
import { Metrics } from './Metrics';

export const commonStyles = StyleSheet.create({
  absoluteView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexSpaceBetweenRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexSpaceBetweenAlignStart: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  flexCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStartRow: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flexStart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  flexStartCenterContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  smallRoundedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  shadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        }
      : { elevation: 5 },
  flexWrapList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  commonBorderStyle: {
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.GREY,
  },
  removeShadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: 'transparent',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
        }
      : { elevation: 0 },
});
