import { StyleSheet } from 'react-native';
import { Metrics, commonStyles, Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    ...commonStyles.shadow,
  },
  companyName: {
    fontSize: Metrics.titleTextSize,
    fontWeight: 'bold',
    color: Colors.BLACK,
    width: '82%',
  },
  profilePic: {
    width: '10%',
    ...commonStyles.smallRoundedImage,
    borderColor: Colors.LIGHT_GREY,
    borderWidth: Metrics.borderWidth,
  },
  scrollView: {
    flex: 1,
    flexGrow: 1,
    minHeight: Metrics.screenHeight,
    marginTop: Metrics.screenHeight / 4.5,
    zIndex: 99,
  },
  revenuesTitleContainer: {
    ...commonStyles.flexSpaceBetweenRow,
    padding: Metrics.smallPadding,
    width: Metrics.fullWidth,
  },
  revenuesTitle: {
    fontWeight: 'bold',
  },
});
