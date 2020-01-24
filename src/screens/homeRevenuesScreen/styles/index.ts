import { StyleSheet } from 'react-native';
import { Metrics } from '../../../styles';
import commonStyles from '../../../styles/commonStyles';
import Colors from '../../../styles/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    ...commonStyles.shadow,
  },
  companyDetails: {
    ...commonStyles.flexSpaceBetweenRow,
    position: 'absolute',
    top: -10,
    zIndex: 9999,
    height: Metrics.screenHeight / 4.5,
    padding: Metrics.averagePadding,
  },
  companyName: {
    fontSize: Metrics.bigTextSize + 3,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: Colors.BLACK,
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
});
