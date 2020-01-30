import { StyleSheet } from 'react-native';
import { Metrics, commonStyles, Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    ...commonStyles.shadow,
  },
  companyDescContainer: {
    ...commonStyles.flexSpaceBetweenRow,
  },
  companyName: {
    fontSize: Metrics.bigTextSize + 3,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: Colors.BACHGROUND,
    width: '82%',
  },
  profilePic: {
    width: '10%',
    ...commonStyles.smallRoundedImage,
    borderColor: Colors.LIGHT_GREY,
    borderWidth: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: Metrics.screenHeight / 4.5,
    zIndex: 99,
    flexGrow: 1,
    minHeight: Metrics.screenHeight,
  },
  revenuesTitleContainer: {
    ...commonStyles.flexSpaceBetweenRow,
    padding: Metrics.smallPadding,
    width: '100%',
  },
  revenuesTitle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  dialog: {
    top: -Metrics.screenHeight / 15,
  },
});
