import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import ItemContainer from './ItemContainer';

interface TProps {
  greenText?: string;
}

const ShareData: React.FC<TProps> = () => {
  return (
    <ItemContainer>
      <Text>Share your company's</Text>
      <Text style={styles.greenText}>financial data</Text>
      <Text>with your team</Text>
    </ItemContainer>
  );
};

export default ShareData;
