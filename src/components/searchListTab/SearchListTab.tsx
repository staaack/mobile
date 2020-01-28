import React from 'react';
import RouteWrapper from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/RouteWrapper';
import { View, TextStyle, StyleProp } from 'react-native';

import { SearchBar } from '../searchBar';
import { List, ListItemProps } from '../list';
import { styles } from './styles';

interface Props {
  data: Array<ListItemProps>;
  /**
   * @description Method triggered the right text is pressed
   * @param name
   */
  onRightTextPress?: (name: string) => void;
  /**
   * @description Placeholder supplied to the search bar
   */
  placeholder: string;
  /**
   * @description Method triggered when the search bar value changed
   * @param text
   */
  onSearchBarTextChange?: (text: string) => void;
  /**
   * @description List Item right text
   */
  rightText?: string;
  /**
   * @description styles object override the default styles
   */
  rightTextStyles?: StyleProp<TextStyle>;
}

export const SearchListTab: React.SFC<Props> = React.memo(
  ({
    data,
    onRightTextPress,
    onSearchBarTextChange,
    placeholder,
    rightText,
    rightTextStyles,
  }): JSX.Element => {
    return (
      <RouteWrapper>
        <View style={styles.tabViewContent}>
          <SearchBar
            placeholder={placeholder}
            onChangeText={onSearchBarTextChange}
          />
          <List
            data={data}
            rightText={rightText}
            onRightTextPress={onRightTextPress}
            rightTextStyles={rightTextStyles}
          />
        </View>
      </RouteWrapper>
    );
  },
);
