import { StyleSheet } from 'react-native';
import { Metrics } from '../../styles';

export default StyleSheet.create({
  leftView: {
    padding: Metrics.averagePadding,
    justifyContent: 'space-around',
  },
  title: {
  	fontFamily: "Poppins",
  	fontWeight: "normal",
  	fontSize: 12
  },
  amount: {
  	fontFamily: "Poppins",
  	fontWeight: "bold",
  	fontSize: 18
  }
});
