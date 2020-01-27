import { StyleSheet } from 'react-native';
import { Colors, Metrics, commonStyles } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    width: '90%',
    height: 50,
    ...commonStyles.flexStartRow,
    ...commonStyles.commonBorderStyle,
    paddingHorizontal: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },
  textInput: {
    width: '80%',
    marginLeft: Metrics.smallMargin,
  },
});
