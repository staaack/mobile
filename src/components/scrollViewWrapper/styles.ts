import { StyleSheet } from 'react-native';

import { Metrics } from '../../styles';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: Metrics.screenHeight / 4,
    zIndex: 99,
    flexGrow: 1,
    minHeight: Metrics.screenHeight,
  },
});
