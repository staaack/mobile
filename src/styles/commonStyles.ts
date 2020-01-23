import { StyleSheet, Platform } from 'react-native';
import Colors from './theme/colors';

export default StyleSheet.create({
  flexSpaceBetweenRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
      : { elevation: 2 },
  flexWrapList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  commonBorderStyle: {
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
});
