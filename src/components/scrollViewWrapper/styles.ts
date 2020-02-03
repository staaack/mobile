import { StyleSheet } from 'react-native';

import { Metrics } from '../../styles';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
    zIndex: 99,
    marginTop: Metrics.screenHeight / 4,
    minHeight: Metrics.screenHeight,
  },
});
