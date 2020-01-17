import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const SlideComponent: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <View
      style={styles.sliderItem}>
      {children}
    </View>
  );
};

export default SlideComponent;
