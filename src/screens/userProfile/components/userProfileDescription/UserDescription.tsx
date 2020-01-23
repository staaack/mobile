import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import MenuPopup from '../../../../components/popupMenu/MenuPopup';
import { ProfileImage } from '../profileImage';

import database from '../../../../database/db';

interface Props {}

const UserDescription: React.FC<Props> = (): JSX.Element => {
  const [visible, setDialogVisibility] = useState<boolean>(false);

  const onPopupClose: () => boolean = () => {
    setDialogVisibility(false);
    return true;
  };

  return (
    <View style={styles.container}>
      <ProfileImage imageURL={{ uri: database[0].team[2].imageURL }} />
    </View>
  );
};

export default UserDescription;
