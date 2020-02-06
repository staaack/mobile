import { StyleSheet } from 'react-native';

import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    ...commonStyles.flexSpaceBetweenRow,
    marginVertical: Metrics.averageMargin,
  },
  leftSide: {
    flexDirection: 'row',
    width: '70%',
  },
  title: {
    maxWidth: '100%',
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
  subTitle: {
    width: '100%',
    fontWeight: 'normal',
    color: Colors.GREY,
    fontSize: Metrics.tinyTextSize,
  },
  profileImageContainer: {
    ...Metrics.profileImage,
    borderWidth: Metrics.smallBorderWidth,
    borderColor: Colors.LIGHT_GREY,
    marginRight: Metrics.averageMargin,
  },
  profileImage: {
    ...Metrics.profileImage,
  },
  cost: {
    fontSize: Metrics.tinyTextSize,
    fontWeight: 'bold',
    color: Colors.MAIN_COLOR,
  },
  rightText: {
    fontWeight: 'normal',
    fontSize: Metrics.tinyTextSize,
  },
});
