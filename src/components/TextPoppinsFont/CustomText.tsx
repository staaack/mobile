import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<Props> = ({
  children,
  style,
}): JSX.Element => {
  return <Text style={[styles.main, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Poppins-SemiBold',
  },
});
