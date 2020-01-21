import { StyleSheet } from 'react-native';
import { Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogStyles: {
    right: -Metrics.screenWidth / 4,
    top: -Metrics.screenHeight / 7.3,
  },
  dialogContent: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: Metrics.screenWidth / 2.5,
    height: Metrics.screenHeight / 6,
    backgroundColor: '#F7F7F8',
  },
});
