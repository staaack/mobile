import React from 'react';
import { Image } from 'react-native';

import { CustomText as Text } from '../../../components/TextPoppinsFont';

import styles from '../styles';
import { DescriptionHeader } from '../../../components/descriptionHeader';

interface Props {
  imageURI: string;
  companyName: string;
}

const CompanyDetails: React.FC<Props> = ({ imageURI, companyName }) => {
  return (
    <DescriptionHeader>
      <Text style={styles.companyName}>{companyName}</Text>
      <Image source={{ uri: imageURI }} style={styles.profilePic} />
    </DescriptionHeader>
  );
};

export default CompanyDetails;
