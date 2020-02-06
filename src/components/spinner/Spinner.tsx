import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors, Metrics, commonStyles } from '../../styles';

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

export const Spinner: React.SFC<AppProps> = React.memo(
  ({ size }): JSX.Element => {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={Colors.MAIN_COLOR}
          size={size}
          style={styles.spinner}
          shouldRasterizeIOS
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexCentered,
    backgroundColor: Colors.WHITE,
  },
  spinner: {
    margin: Metrics.averageMargin,
    alignSelf: 'center',
  },
});
