import { StyleSheet } from 'react-native';
import Colors from '../../styles/theme/colors';
import Metrics from '../../styles/Metrics';

export default StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    backgroundColor: Colors.LIGHT_GREY,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    marginTop: Metrics.averageMargin * 2,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: Metrics.smallPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
  },
});
