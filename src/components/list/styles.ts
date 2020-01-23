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
  rightSide: {
    // alignSelf: 'center',
    // justifyContent: 'flex-end',
    // minWidth: '15%',
    // marginRight: '10%',
  },
  rightText: {
    fontSize: Metrics.tinyTextSize,
  },
});
