import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../styles';
import { headerStyles as styles } from './styles';

interface Props {
  /**
   * @description function to be executed when pressing on the left header icon
   */
  onIconPress?: () => void;

  /**
   * @description Custom View styles which applied to icon container
   */
  customStyles?: StyleProp<ViewStyle>;
}

export const LeftHeaderIcon: React.SFC<Props> = ({
  onIconPress,
  customStyles,
}): React.ReactElement => (
  <TouchableOpacity
    onPress={onIconPress}
    style={[styles.iconLeft, customStyles]}
  >
    <Ionicon name="ios-arrow-round-back" size={40} color={Colors.MAIN_COLOR} />
  </TouchableOpacity>
);
