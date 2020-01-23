import React, { useCallback } from 'react';
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
  onRightTextPress?: (name: string) => void;
}

const List: React.FC<Props> = ({
  data,
  rightTextStyles,
  rightText,
  onRightTextPress,
}): JSX.Element => {
  const renderListItem: ListRenderItem<ListItemProps> = useCallback(
    ({ item }) => (
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
        <View style={styles.rightSide}>
          {onRightTextPress ? (
            <TouchableOpacity onPress={() => onRightTextPress(item.title)}>
              <Text style={[styles.rightText, rightTextStyles]}>
                {rightText}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text>
              <Text style={[styles.rightText, rightTextStyles]}>
                {rightText}
              </Text>
            </Text>
          )}
        </View>
      </View>
    ),
    [data],
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
