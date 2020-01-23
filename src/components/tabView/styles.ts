import { StyleSheet } from 'react-native';
import Colors from '../../styles/theme/colors';
import Metrics from '../../styles/Metrics';
import { commonStyles } from '../../styles';

export default StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    backgroundColor: Colors.LIGHT_GREY,
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: Metrics.averageMargin * 2,
  },
  tabItem: {
    flex: 1,
    paddingBottom: Metrics.smallPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    minWidth: 120,
  },
});
