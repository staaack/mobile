import React from 'react';
import { Image, View } from 'react-native';

import { CustomText as Text } from '../../../components/TextPoppinsFont';

import styles from '../styles';
import { DescriptionHeader } from '../../../components/descriptionHeader';

interface Props {
  imageURI: string;
  companyName: string;
}

const CompanyDetails: React.FC<Props> = React.memo(
  ({ imageURI, companyName }) => {
    return (
      <DescriptionHeader>
        <View style={styles.companyDescContainer}>
          <Text style={styles.companyName}>{companyName}</Text>
          <Image source={{ uri: imageURI }} style={styles.profilePic} />
        </View>
      </DescriptionHeader>
    );
  },
);

export default CompanyDetails;
