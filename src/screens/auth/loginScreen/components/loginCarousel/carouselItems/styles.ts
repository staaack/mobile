import { StyleSheet } from 'react-native';

import { Metrics, Colors } from '../../../../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Arial',
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Metrics.bigTextSize,
  },
  greenText: {
    color: Colors.MAIN_COLOR,
    marginLeft: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
  },
});
