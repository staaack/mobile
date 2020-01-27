import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface Props {
  role: string;
}

export const UserRole: React.FC<Props> = ({ role }): JSX.Element => {
  return <Text style={styles.smallText}>{role}</Text>;
};
