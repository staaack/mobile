import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  topic: string;
  amount: string;
}

const Card: React.FC<Props> = ({ amount, topic }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
          
      </View>
      <View style={styles.topicContainer}>
        <Text>{topic}</Text>
        <Text>{amount}</Text>
      </View>
    </View>
  );
};

export default Card;
