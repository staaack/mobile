import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../styles';
import { commonStyles } from '../../styles/commonStyles';
export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    ...commonStyles.flexSpaceBetweenRow,
    paddingTop: 15,
  },
  leftView: {
    padding: Metrics.averagePadding,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingVertical: Metrics.averagePadding,
  },
  title: {
    fontSize: Metrics.mediumTextSize,
    paddingBottom: Metrics.smallMargin,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: Metrics.titleTextSize,
    color: Colors.BACHGROUND,
  },
  dialog: {
    top: -Metrics.screenHeight / 5,
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
