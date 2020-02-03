import React from 'react';

import { CustomText as Text } from '../../../../../../components/TextPoppinsFont';

import styles from './styles';
import ItemContainer from './ItemContainer';

interface TProps {
  greenText?: string;
}

const ShareData: React.FC<TProps> = () => {
  return (
    <ItemContainer>
      <Text style={[styles.text]}>Share your company's</Text>
      <Text style={[styles.text, styles.greenText]}>financial data</Text>
      <Text style={styles.text}>with your team</Text>
    </ItemContainer>
  );
};

export default ShareData;
