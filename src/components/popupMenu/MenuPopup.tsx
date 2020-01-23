import React, { useRef } from 'react';
import { View } from 'react-native';
import Dialog, {
  DialogContent,
  FadeAnimation,
} from 'react-native-popup-dialog';

import styles from './styles';
import MenuItem from './MenuItem';

interface Props {
  isVisible: boolean;
  onClose: () => boolean;
  onTodayPress: () => void;
  onThisMonthPress: () => void;
  onThisYearPress: () => void;
}

const MenuPopup: React.FC<Props> = ({
  isVisible,
  onClose,
  onThisMonthPress,
  onThisYearPress,
  onTodayPress,
}): JSX.Element => {
  const dialogRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <Dialog
        ref={dialogRef.current}
        rounded={false}
        visible={isVisible}
        onTouchOutside={onClose}
        dialogStyle={styles.dialogStyles}
        dialogAnimation={new FadeAnimation({ animationDuration: 250 })}
        onHardwareBackPress={onClose}
        overlayBackgroundColor="rgba(0, 0, 0, 0.56)"
      >
        <DialogContent style={styles.dialogContent}>
          <MenuItem itemText="Today" onItemPress={onTodayPress} />
          <MenuItem itemText="This month" onItemPress={onThisMonthPress} />
          <MenuItem itemText="This year" onItemPress={onThisYearPress} />
        </DialogContent>
      </Dialog>
    </View>
  );
};

export default MenuPopup;
