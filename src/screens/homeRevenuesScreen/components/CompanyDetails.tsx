import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from '../styles';
import { DescriptionHeader } from '../../../components/descriptionHeader';

interface Props {
  imageURI: string;
  companyName: string;
}

const CompanyDetails: React.FC<Props> = ({ imageURI, companyName }) => {
  return (
    <DescriptionHeader>
      <View style={styles.companyDescContainer}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Image source={{ uri: imageURI }} style={styles.profilePic} />
      </View>
    </DescriptionHeader>
  );
};

export default CompanyDetails;
