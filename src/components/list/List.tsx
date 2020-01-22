import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  View,
  Text,
  Image,
  ListRenderItem,
  StyleProp,
  TextStyle,
} from 'react-native';
import styles from './styles';

export interface ListItemProps {
  imageURL: string;
  title: string;
  surTitle: string;
}

interface Props {
  data: Array<ListItemProps>;
  rightText: string;
  rightTextStyles?: StyleProp<TextStyle>;
  onRightTextPress?: () => void;
}

const List: React.FC<Props> = ({
  data,
  rightTextStyles,
  rightText,
  onRightTextPress,
}): JSX.Element => {
  const renderListItem: ListRenderItem<ListItemProps> = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          source={{ uri: item.imageURL }}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.surTitle}</Text>
        </View>
      </View>
      {onRightTextPress ? (
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={rightTextStyles}>{rightText}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{ flex: 1 }}>
          <Text style={[styles.rightText, rightTextStyles]}>{rightText}</Text>
        </Text>
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderListItem}
      keyExtractor={item => item.title}
    />
  );
};

export default List;
