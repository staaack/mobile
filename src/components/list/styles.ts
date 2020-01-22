import { StyleSheet } from 'react-native';

import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    width: Metrics.screenWidth,
    ...commonStyles.flexSpaceBetweenRow,
    margin: Metrics.smallMargin,
  },
  leftSide: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Metrics.smallTextSize,
  },
  subTitle: {
    color: Colors.GREY,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY,
    marginRight: Metrics.averageMargin,
  },
  rightText: {
    fontSize: Metrics.tinyTextSize,
  },
});
