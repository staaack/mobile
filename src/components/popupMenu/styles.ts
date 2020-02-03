import { StyleSheet } from 'react-native';
import { Metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogStyles: {
    right: -Metrics.screenWidth / 4,
    top: -Metrics.screenHeight / 10,
  },
  dialogContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: Metrics.screenWidth / 2.5,
    backgroundColor: '#F7F7F8',
    paddingTop: Metrics.smallPadding,
  },
  item: {
    marginVertical: Metrics.smallMargin,
    width: Metrics.fullWidth,
  },
  item_text: {
    fontWeight: 'normal',
  },
});
