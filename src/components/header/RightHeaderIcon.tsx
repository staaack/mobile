import React, { ReactElement, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { withNavigation } from 'react-navigation';

import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

import { headerStyles as styles } from './styles';
import { Colors } from '../../styles';
import { MenuPopup, MenuItem } from '../popupMenu';

export interface Props extends TNavigationProps {
  /**
   * @description function to be executed when pressing on the right header icon
   */
  onIconPress?: () => void;
}

const Icon: React.SFC<Props> = ({
  onIconPress = () => null,
  navigation,
}): ReactElement => {
  const [isPopupVisible, updatePopupVisibility] = useState<boolean>(false);

  const onThreeDotsPress: () => void = () => {
    updatePopupVisibility(!isPopupVisible);
    onIconPress();
  };

  const onPopupClose: () => boolean = () => {
    updatePopupVisibility(false);
    return true;
  };

  const onHelpPress: () => boolean = () => {
    updatePopupVisibility(false);
    navigation.navigate('Help');
    return true;
  };

  const onSettingsPress: () => boolean = () => {
    updatePopupVisibility(false);
    navigation.navigate('Settings');
    return true;
  };

  return (
    <TouchableOpacity onPress={onThreeDotsPress} style={styles.iconRight}>
      <EntypoIcon
        name="dots-three-vertical"
        size={20}
        color={Colors.MAIN_COLOR}
      />
      <MenuPopup
        isVisible={isPopupVisible}
        onClose={onPopupClose}
        customDialogStyles={styles.menuPopup}
      >
        <MenuItem itemText="Settings" onItemPress={onSettingsPress} />
        <MenuItem itemText="Help" onItemPress={onHelpPress} />
      </MenuPopup>
    </TouchableOpacity>
  );
};

export const RightHeaderIcon = withNavigation(Icon);
