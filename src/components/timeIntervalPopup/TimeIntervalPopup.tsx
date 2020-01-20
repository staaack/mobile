import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../styles/theme/colors';

interface TProps {}

const TimeIntervalPopup: React.FC<TProps> = ({}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This year</Text>
      <Icon name="ios-arrow-down" size={19} color={Colors.MAIN_COLOR} />
    </View>
  );
};

export default TimeIntervalPopup;
