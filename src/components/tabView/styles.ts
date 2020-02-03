import { StyleSheet } from 'react-native';
import { commonStyles, Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    marginTop: Metrics.basisMarginTop,
    backgroundColor: Colors.WHITE,
  },
  tabItem: {
    flex: 1,
    ...commonStyles.flexCentered,
    textAlign: 'center',
    borderBottomWidth: Metrics.borderWidth,
    borderBottomColor: Colors.GREY,
    padding: Metrics.tinyPadding,
  },
});
