import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../styles/theme/colors';
import { MenuPopup } from '../popupMenu';

const TimeIntervalPopup: React.FC<{}> = (): JSX.Element => {
  const [isDialogVisible, updateDialogVisibility] = useState<boolean>(false);
  const [selectedTime, updateSelectedTime] = useState<string>('Today');

  const onArrowDownPress: () => void = () =>
    updateDialogVisibility(!isDialogVisible);

  const onDialogClose: () => boolean = () => {
    updateDialogVisibility(false);

    return true;
  };

  const onTodayPress: () => void = () => {
    updateSelectedTime('Today');
    onDialogClose();
  };

  const onMonthPress: () => void = () => {
    updateSelectedTime('This month');
    onDialogClose();
  };

  const onYearPress: () => void = () => {
    updateSelectedTime('This year');
    onDialogClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedTime}</Text>
      <TouchableOpacity onPress={onArrowDownPress}>
        <Icon name="ios-arrow-down" size={21} color={Colors.MAIN_COLOR} />
      </TouchableOpacity>
      <MenuPopup
        onThisMonthPress={onMonthPress}
        onThisYearPress={onYearPress}
        onTodayPress={onTodayPress}
        isVisible={isDialogVisible}
        onClose={onDialogClose}
      />
    </View>
  );
};

export default TimeIntervalPopup;
