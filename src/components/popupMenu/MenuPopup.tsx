import React, { useRef } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Dialog, {
  DialogContent,
  FadeAnimation,
} from 'react-native-popup-dialog';

import styles from './styles';

interface TProps {
  isVisible: boolean;
  onClose: () => boolean;
  customDialogStyles?: StyleProp<ViewStyle>;
}

const MenuPopup: React.FC<TProps> = ({
  isVisible,
  onClose,
  children,
  customDialogStyles,
}): JSX.Element => {
  const dialogRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <Dialog
        ref={dialogRef.current}
        rounded={false}
        visible={isVisible}
        onTouchOutside={onClose}
        dialogStyle={[styles.dialogStyles, customDialogStyles]}
        dialogAnimation={new FadeAnimation({ animationDuration: 250 })}
        onHardwareBackPress={onClose}
        overlayBackgroundColor="rgba(0, 0, 0, 0.56)"
      >
        <DialogContent style={styles.dialogContent}>{children}</DialogContent>
      </Dialog>
    </View>
  );
};

export default MenuPopup;
