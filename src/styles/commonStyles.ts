import { StyleSheet } from 'react-native';

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
  flexStart: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  smallRoundedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
