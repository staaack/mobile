import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flexSpaceBetweenRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallRoundedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
