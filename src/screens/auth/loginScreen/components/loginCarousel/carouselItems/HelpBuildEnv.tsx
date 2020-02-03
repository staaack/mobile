import React from 'react';

import { CustomText as Text } from '../../../../../../components/TextPoppinsFont';

import styles from './styles';
import ItemContainer from './ItemContainer';

interface TProps {
  greenText?: string;
}

const HelpBuildEnv: React.FC<TProps> = () => {
  return (
    <ItemContainer>
      <Text style={[styles.text]}>Help build an environment of</Text>
      <Text style={[styles.text, styles.greenText]}>trust.</Text>
    </ItemContainer>
  );
};

export default HelpBuildEnv;
