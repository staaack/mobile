import { StyleSheet } from 'react-native';

import { Metrics, Colors, commonStyles } from '../../../../../../styles';

export default StyleSheet.create({
  container: {
    ...commonStyles.flexStartRow,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: Metrics.averagePadding,
  },
  text: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Metrics.sliderTextSize,
  },
  greenText: {
    color: Colors.MAIN_COLOR,
    marginLeft: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
  },
});
