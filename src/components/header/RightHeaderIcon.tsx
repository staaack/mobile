import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../../styles/theme/colors';
import styles from './styles';

export interface Props {
  onIconPress?: () => void;
}

const RightHeaderIcon: React.SFC<Props> = ({ onIconPress }): ReactElement => (
  <TouchableOpacity onPress={onIconPress} style={styles.iconRight}>
    <EntypoIcon
      name="dots-three-vertical"
      size={20}
      color={Colors.MAIN_COLOR}
    />
  </TouchableOpacity>
);

export default RightHeaderIcon;
