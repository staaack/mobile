import React, { useRef } from 'react';
import { View } from 'react-native';
import Dialog, {
  DialogContent,
  FadeAnimation,
} from 'react-native-popup-dialog';

import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => boolean;
}

const MenuPopup: React.FC<Props> = ({
  isVisible,
  onClose,
  children,
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
        <DialogContent style={styles.dialogContent}>{children}</DialogContent>
      </Dialog>
    </View>
  );
};

export default MenuPopup;
