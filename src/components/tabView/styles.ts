import { StyleSheet } from 'react-native';
import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    marginTop: Metrics.averageMargin * 2,
    backgroundColor: Colors.WHITE,
  },
  tabItem: {
    flex: 1,
    ...commonStyles.flexCentered,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
  },
});
