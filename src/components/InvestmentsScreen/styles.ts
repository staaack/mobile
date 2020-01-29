import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { commonStyles } from '../../styles/commonStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    ...commonStyles.flexSpaceBetweenRow,
    paddingTop: 15,
  },
});
