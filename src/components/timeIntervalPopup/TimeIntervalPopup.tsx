import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../styles/theme/colors';
import { MenuPopup } from '../popupMenu';
import MenuItem from '../popupMenu/MenuItem';

interface TProps {
  onTodayPress: () => void;
  onThisMonthPress: () => void;
  onThisYearPress: () => void;
  dialogStyles?: StyleProp<ViewStyle>;
}

const TimeIntervalPopup: React.FC<TProps> = ({
  onThisMonthPress,
  onThisYearPress,
  onTodayPress,
  dialogStyles,
}): JSX.Element => {
  const [isDialogVisible, updateDialogVisibility] = useState<boolean>(false);
  const [selectedTime, updateSelectedTime] = useState<string>('Today');

  const onArrowDownPress: () => void = () =>
    updateDialogVisibility(!isDialogVisible);

  const onDialogClose: () => boolean = () => {
    updateDialogVisibility(false);

    return true;
  };

  const onTodayItemPress: () => void = () => {
    updateSelectedTime('Today');
    onThisMonthPress();
    onDialogClose();
  };

  const onMonthItemPress: () => void = () => {
    updateSelectedTime('This month');
    onThisYearPress();
    onDialogClose();
  };

  const onYearItemPress: () => void = () => {
    updateSelectedTime('This year');
    onTodayPress();
    onDialogClose();
  };

  return (
    <>
      <TouchableOpacity onPress={onArrowDownPress} style={styles.container}>
        <Text style={styles.text}>{selectedTime}</Text>
        <Icon name="ios-arrow-down" size={21} color={Colors.MAIN_COLOR} />
      </TouchableOpacity>
      <MenuPopup
        isVisible={isDialogVisible}
        onClose={onDialogClose}
        customDialogStyles={dialogStyles}
      >
        <MenuItem itemText="Today" onItemPress={onTodayItemPress} />
        <MenuItem itemText="This month" onItemPress={onMonthItemPress} />
        <MenuItem itemText="This year" onItemPress={onYearItemPress} />
      </MenuPopup>
    </>
  );
};

export default TimeIntervalPopup;
