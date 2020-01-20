import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import styles from './styles';

interface Props {
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.progress,
            { width: percentage.toString() + '%' },
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
