import { StyleSheet } from 'react-native';
import { Metrics, commonStyles, Colors } from '../../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    ...commonStyles.shadow,
  },
  loadingContainer: {
    flex: 1,
    ...commonStyles.flexCentered,
  },
  companyDescContainer: {
    ...commonStyles.flexSpaceBetweenRow,
  },
  companyName: {
    fontSize: Metrics.titleTextSize,
    fontWeight: 'bold',
    color: Colors.BACHGROUND,
    width: '82%',
  },
  profilePic: {
    width: '10%',
    ...commonStyles.smallRoundedImage,
    borderColor: Colors.GREY,
    borderWidth: Metrics.smallBorderWidth,
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
  dialog: {
    top: -Metrics.screenHeight / 16,
  },
});
