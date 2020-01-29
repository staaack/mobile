import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

export const SlideComponent: React.FC<Props> = React.memo(
  ({ children }): JSX.Element => {
    return <View style={styles.sliderItem}>{children}</View>;
  },
);
