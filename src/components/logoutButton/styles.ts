import { StyleSheet } from 'react-native';
import { Colors, Metrics, commonStyles } from '../../styles';

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    ...commonStyles.flexStartCenterContent,
  },
  text: {
    color: Colors.RED,
    fontSize: Metrics.smallTextSize,
  },
});
