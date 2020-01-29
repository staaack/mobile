import React, { useState, useContext, useMemo } from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors } from '../../styles';
import { MenuPopup, MenuItem } from '../popupMenu';
import {
  TContextValue,
  LocalizationContext,
} from '../../localization/LocalizationContext';

export interface TIntervalTimeProps {
  onTodayPress: () => void;
  onThisMonthPress: () => void;
  onThisYearPress: () => void;
  dialogStyles?: StyleProp<ViewStyle>;
}

export const TimeIntervalPopup: React.SFC<TIntervalTimeProps> = React.memo(
  ({
    onThisMonthPress,
    onThisYearPress,
    onTodayPress,
    dialogStyles,
  }): JSX.Element => {
    const { translations } = useContext<TContextValue>(LocalizationContext);

    const [isDialogVisible, updateDialogVisibility] = useState<boolean>(false);
    const [selectedTime, updateSelectedTime] = useState<string>(
      translations['popup.today'],
    );

    const today = translations['popup.today'];
    const thisMonth = translations['popup.today'];
    const thisYear = translations['popup.today'];

    const onArrowDownPress: () => void = () =>
      updateDialogVisibility(!isDialogVisible);

    const onDialogClose: () => boolean = () => {
      updateDialogVisibility(false);

      return true;
    };

    const onTodayItemPress: () => void = () => {
      updateSelectedTime(today);
      onThisMonthPress();
      onDialogClose();
    };

    const onMonthItemPress: () => void = () => {
      updateSelectedTime(thisMonth);
      onThisYearPress();
      onDialogClose();
    };

    const onYearItemPress: () => void = () => {
      updateSelectedTime(thisYear);
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
          <MenuItem itemText={today} onItemPress={onTodayItemPress} />
          <MenuItem itemText={thisMonth} onItemPress={onMonthItemPress} />
          <MenuItem itemText={thisYear} onItemPress={onYearItemPress} />
        </MenuPopup>
      </>
    );
  },
);
