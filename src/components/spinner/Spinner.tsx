import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../../styles/theme/colors';
import { Metrics } from '../../styles/Metrics';

interface AppProps {
  /**
   * @description Text (optional) will be displayed beneath the spinner
   */
  text?: string;

  /**
   * @description Spinner Size(required) large or small or a custom number (only for Android)
   */
  size: number | 'large' | 'small';
}

/**
 * @description This component is a custom Activity indicator
 * @param size
 */

export const Spinner: React.SFC<AppProps> = ({ size }): JSX.Element => {
  return (
    <ActivityIndicator
      color={Colors.MAIN_COLOR}
      size={size}
      style={styles.spinner}
      shouldRasterizeIOS
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    margin: Metrics.averageMargin,
    alignSelf: 'center',
  },
});
