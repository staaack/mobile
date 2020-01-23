import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardsListWrapper: React.FC<{}> = ({ children }): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({ container: {} });

export default CardsListWrapper;
