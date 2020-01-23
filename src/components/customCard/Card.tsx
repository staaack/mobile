import React, { ReactElement } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageURISource,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../styles/theme/colors';

interface Props {
  topic: string;
  amount: string;
  onCardPress?: () => void;
  leftIconSource: ImageURISource;
  displayTrend?: boolean;
  isTrendingUp?: boolean;
}

const Card: React.FC<Props> = ({
  amount,
  topic,
  onCardPress,
  leftIconSource,
  displayTrend = true,
  isTrendingUp = true,
}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={onCardPress}>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconWrapper}>
            <Image source={leftIconSource} style={styles.icon} />
          </View>
          {displayTrend ? (
            <Icon
              name={isTrendingUp ? 'md-trending-up' : 'md-trending-down'}
              size={18}
              color={isTrendingUp ? Colors.MAIN_COLOR : Colors.RED}
            />
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
