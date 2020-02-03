import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { commonStyles } from '../../styles/commonStyles';
import { Metrics } from '../../styles/Metrics';

export default StyleSheet.create({
  container: {
    width: Metrics.fullWidth,
    backgroundColor: Colors.WHITE,
    ...commonStyles.flexSpaceBetweenRow,
    paddingTop: Metrics.mediumPadding,
  },
});
