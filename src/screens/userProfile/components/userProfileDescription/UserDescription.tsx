import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { ProfileImage } from '../profileImage';
import { UserName } from './UserName';
import { UserRole } from './UserRole';
import { Salary } from './Salary';
import { TimeIntervalPopup } from '../../../../components/timeIntervalPopup';
import { ListItemProps } from 'components/list';

export type IPerson = {
  id: string;
  imageURL: string;
  name: string;
  role: string;
};

interface TProps {
  /**
   * @description The person object which contain the user imageURL, name and role.
   */
  person: IPerson;
}

export const UserDescription: React.FC<TProps> = ({ person }): JSX.Element => {
  const [visible, setDialogVisibility] = useState<boolean>(false);

  const onPopupClose: () => boolean = () => {
    setDialogVisibility(false);
    return true;
  };

  const onYearPress = () => {};
  const onTodayPress = () => {};
  const onMonthPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <TimeIntervalPopup
          onThisMonthPress={onMonthPress}
          onThisYearPress={onYearPress}
          onTodayPress={onTodayPress}
          dialogStyles={styles.dialog}
        />
      </View>
      <ProfileImage imageURL={person.imageURL} />
      <UserName userName={person.name} />
      <UserRole role={person.role} />
      <Salary />
    </View>
  );
};
