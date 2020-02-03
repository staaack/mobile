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
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
  subTitle: {
    fontWeight: 'normal',
    color: Colors.GREY,
    fontSize: Metrics.tinyTextSize,
  },
  profileImage: {
    ...Metrics.profileImage,
    borderWidth: Metrics.smallBorderWidth,
    borderColor: Colors.LIGHT_GREY,
    marginRight: Metrics.averageMargin,
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
