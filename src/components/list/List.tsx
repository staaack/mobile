import React, { useCallback } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ListRenderItem,
  StyleProp,
  TextStyle,
} from 'react-native';

import { CustomText as Text } from '../TextPoppinsFont/CustomText';

import styles from './styles';

export interface ListItemProps {
  id: string;
  imageURL: string;
  title: string;
  surTitle: string;
  cost?: string;
}

export interface IListProps {
  data: Array<ListItemProps>;
  /**
   * @description List Item right text
   */
  rightText?: string;
  /**
   * @description styles object override the default styles
   */
  rightTextStyles?: StyleProp<TextStyle>;
  onRightTextPress?: (name: string) => void;
}

export const List: React.FC<IListProps> = React.memo(
  ({ data, rightTextStyles, rightText, onRightTextPress }): JSX.Element => {
    const renderListItem: ListRenderItem<ListItemProps> = useCallback(
      ({ item }) => (
        <View style={styles.container}>
          <View style={styles.leftSide}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: item.imageURL }}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.surTitle}</Text>
            </View>
          </View>
          <View>
            {onRightTextPress ? (
              <TouchableOpacity onPress={() => onRightTextPress(item.id)}>
                <Text style={[styles.rightText, rightTextStyles]}>
                  {rightText}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text>
                <Text style={[styles.cost, rightTextStyles]}>
                  {rightText && typeof item.cost === 'undefined'
                    ? rightText
                    : item.cost}
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
  },
);
