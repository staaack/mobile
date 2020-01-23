import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../styles/theme/colors';
import styles from './styles';

interface Props {
  onIconPress?: () => void;
}

const LeftHeaderIcon: React.SFC<Props> = ({
  onIconPress,
}): React.ReactElement => (
  <TouchableOpacity onPress={onIconPress} style={styles.iconLeft}>
    <Ionicon name="ios-arrow-round-back" size={40} color={Colors.MAIN_COLOR} />
  </TouchableOpacity>
);

export default LeftHeaderIcon;
