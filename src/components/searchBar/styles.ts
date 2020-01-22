import { StyleSheet } from 'react-native';
import Colors from '../../styles/theme/colors';
import commonStyles from '../../styles/commonStyles';
import Metrics from '../../styles/Metrics';

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
  },
  textInput: {
    width: '80%',
    marginLeft: Metrics.smallMargin,
  },
});
