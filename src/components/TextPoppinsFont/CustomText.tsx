import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

import { Colors } from '../../styles';

export const CustomText: React.SFC<TextProps> = React.memo(
  ({ children, style }): JSX.Element => {
    return (
      <Text
        selectionColor={Colors.TEXT_SELECT}
        selectable={true}
        style={[styles.main, style]}
      >
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Poppins-Medium',
  },
});
