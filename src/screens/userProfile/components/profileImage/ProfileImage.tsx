import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  imageURL: string;
}

export const ProfileImage: React.FC<Props> = ({ imageURL }): ReactElement => {
  return (
    <View style={styles.imageContainer}>
      <Image
        resizeMode="stretch"
        source={{ uri: imageURL }}
        style={styles.image}
      />
    </View>
  );
};
