import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { headerStyles } from './styles';
import { Colors } from '../../styles';

interface Props {
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
}

export const Header: React.FC<Props> = ({
  onRightIconPress,
  onLeftIconPress,
}): JSX.Element => {
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity
        style={{ width: 30, height: 30 }}
        onPress={() => console.log('header')}
      >
        <Ionicon
          name="ios-arrow-round-back"
          size={40}
          color={Colors.MAIN_COLOR}
        />
      </TouchableOpacity>
      {typeof onRightIconPress !== 'undefined' ? (
        <EntypoIcon
          name="dots-three-vertical"
          size={20}
          color={Colors.MAIN_COLOR}
          onPress={() => console.log('Hello log')}
          selectable={true}
        />
      ) : (
        <View />
      )}
    </View>
  );
};
