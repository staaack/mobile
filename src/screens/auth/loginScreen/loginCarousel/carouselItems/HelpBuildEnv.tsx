import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import ItemContainer from './ItemContainer';

interface TProps {
  greenText?: string;
}

const HelpBuildEnv: React.FC<TProps> = () => {
  return (
    <ItemContainer>
      <Text>Help build an environment of</Text>
      <Text style={styles.greenText}>trust.</Text>
    </ItemContainer>
  );
};

export default HelpBuildEnv;
