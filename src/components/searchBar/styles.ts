import { StyleSheet } from 'react-native';
import { Colors, Metrics, commonStyles } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: Metrics.bigRadius,
    width: '90%',
    height: 50,
    ...commonStyles.flexStartRow,
    ...commonStyles.commonBorderStyle,
    paddingHorizontal: Metrics.mediumPadding,
    marginBottom: Metrics.basisMarginTop,
    alignSelf: 'center',
  },
  textInput: {
    width: '80%',
    marginLeft: Metrics.smallMargin,
  },
});
