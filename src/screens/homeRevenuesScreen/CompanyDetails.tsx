import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface Props {
  imageURI: string;
  companyName: string;
}

const CompanyDetails: React.FC<Props> = ({ imageURI, companyName }) => {
  return (
    <View style={styles.companyDetails}>
      <Text style={styles.companyName}>{companyName}</Text>
      <Image source={{ uri: imageURI }} style={styles.profilePic} />
    </View>
  );
};

export default CompanyDetails;
