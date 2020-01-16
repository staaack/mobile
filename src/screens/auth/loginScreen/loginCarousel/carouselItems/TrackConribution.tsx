import React from 'react';
import { View, Text } from 'react-native';
import ItemContainer from './ItemContainer';
import styles from './styles';

interface Props {}

const TrackConribution: React.FC<Props> = () => {
  return (
    <ItemContainer>
      <Text>Track your</Text>
      <Text style={styles.greenText}>contribution</Text>
      <Text>the company.</Text>
    </ItemContainer>
  );
};

export default TrackConribution;
