import { StyleSheet } from 'react-native';
import Colors from '../../../../../styles/theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'Arial',
    color: Colors.BLACK,
    fontWeight: '700',
  },
  greenText: {
    color: Colors.MAIN_COLOR,
  },
});
