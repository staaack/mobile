import React, { ReactElement } from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';
import { commonStyles, Metrics } from '../../../../styles';

interface Props {
  imageURL: string;
}

const ProfileImage: React.FC<Props> = ({ imageURL }): ReactElement => {
  return (
    <View style={styles.imageContainer}>
      <Image
        resizeMode="center"
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
    borderRadius: 10,
    ...commonStyles.commonBorderStyle,
    borderWidth: 0.5,
    marginBottom: Metrics.bigMargin,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileImage;
