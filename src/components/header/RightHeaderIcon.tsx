import React, { ReactElement, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { withNavigation } from 'react-navigation';

import Colors from '../../styles/theme/colors';
import styles from './styles';
import { MenuPopup } from '../popupMenu';
import MenuItem from '../popupMenu/MenuItem';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { Metrics } from '../../styles';

export interface Props extends TNavigationProps {
  onIconPress?: () => void;
}

const RightHeaderIcon: React.SFC<Props> = ({
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

export default withNavigation(RightHeaderIcon);
