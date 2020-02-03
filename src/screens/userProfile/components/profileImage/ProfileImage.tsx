import React, { ReactElement } from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';
import { commonStyles, Metrics } from '../../../../styles';

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
    width: 80,
    height: 80,
    borderRadius: Metrics.averageRadius,
    marginBottom: Metrics.bigMargin,
    ...commonStyles.shadow,
  },
  image: {
    width: Metrics.fullWidth,
    height: Metrics.fullHeight,
  },
});
