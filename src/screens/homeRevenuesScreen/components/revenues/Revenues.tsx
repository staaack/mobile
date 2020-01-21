import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import RevenuesTitle from '../RevenuesTitle';
import RevenuesProgress from '../RevenuesProgress';
import { RevenuesDescription } from '../revenuesDescription';

interface Props {}

const Revenues: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <RevenuesTitle />
      <RevenuesProgress />
      <RevenuesDescription />
    </View>
  );
};

export default Revenues;
