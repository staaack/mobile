import React, { ReactElement } from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';
import { Metrics, elevationShadowStyle } from '../../../../styles';

interface Props {
  imageURL: string;
}

export const ProfileImage: React.FC<Props> = ({ imageURL }): ReactElement => {
  return (
    <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: imageURL }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: Metrics.averageRadius,
    marginBottom: Metrics.mediumMargin,
    ...elevationShadowStyle(7),
  },
  image: {
    width: Metrics.fullWidth,
    height: Metrics.fullHeight,
  },
});
