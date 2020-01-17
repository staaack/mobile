import React from 'react';
import { View, Text } from 'react-native';
import ItemContainer from './ItemContainer';
import styles from './styles';

interface Props {}

const TrackConribution: React.FC<Props> = () => {
  return (
    <ItemContainer>
      <Text style={styles.text}>Track your</Text>
      <Text style={[styles.text, styles.greenText]}>contribution</Text>
      <Text style={styles.text}>the company.</Text>
    </ItemContainer>
  );
};

export default TrackConribution;
