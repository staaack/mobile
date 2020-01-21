import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../styles';

export default StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 18,
  },
});
