import React, { ReactElement } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import icons from '../../assets/icons';
import styles from './styles';
import Colors from '../../styles/theme/colors';

interface Props {
  topic: string;
  amount: string;
  onCardPress?: () => void;
  LeftIcon: ReactElement;
  displayTrend?: boolean;
}

const Card: React.FC<Props> = ({
  amount,
  topic,
  onCardPress,
  LeftIcon,
  displayTrend = true,
}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={onCardPress}>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconWrapper}>{LeftIcon}</View>
          {displayTrend ? (
            <Icon name="md-trending-up" size={20} color={Colors.MAIN_COLOR} />
          ) : (
            <View />
          )}
        </View>
        <View style={styles.topicContainer}>
          <Text>{topic}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
