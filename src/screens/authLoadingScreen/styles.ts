import { StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';
import { Metrics } from '../../styles/Metrics';
import { Colors } from '../../styles/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexCentered,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: Metrics.mediumMargin,
  },
  spinner: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    ...commonStyles.flexCentered,
  },
  spinnerText: {
    fontFamily: 'Poppins-Light',
    color: Colors.BG_MUTED,
    fontWeight: 'normal',
    marginTop: Metrics.averageMargin,
  },
});
