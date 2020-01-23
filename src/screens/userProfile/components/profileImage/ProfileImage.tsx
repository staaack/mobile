import React from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';
import { commonStyles } from '../../../../styles';

interface Props {
  imageURL: ImageURISource;
}

const ProfileImage: React.FC<Props> = ({ imageURL }) => {
  return (
    <View style={styles.imageContainer}>
      <Image resizeMode="center" source={imageURL} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    ...commonStyles.commonBorderStyle,
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileImage;
