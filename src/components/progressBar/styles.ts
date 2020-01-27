import { StyleSheet } from 'react-native';

import { Colors, Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Metrics.averagePadding,
    padding: Metrics.smallPadding,
    borderRadius: 50,
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 50,
    flexDirection: 'row',
  },
  progress: {
    backgroundColor: Colors.MAIN_COLOR,
    borderRadius: 50,
  },
});
