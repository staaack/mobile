import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../styles';
import { Metrics } from '../../../../../styles/Metrics';

export default StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: Metrics.bigRadius,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: Metrics.tinyTextSize,
    lineHeight: 18,
    fontWeight: 'bold',
  },
});
