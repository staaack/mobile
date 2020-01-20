import React from 'react';
import { View } from 'react-native';

import Money from './Money';
import styles from './styles';

const RevenuesDescription: React.FC<{}> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Money title="Current earning" amount="1,550,000" />
      <Money title="Revenue objectives" amount="2,256,000" />
    </View>
  );
};

export default RevenuesDescription;
