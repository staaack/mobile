import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface Props {
  role: string;
}

const UserRole: React.FC<Props> = ({ role }): JSX.Element => {
  return <Text style={styles.smallText}>{role}</Text>;
};

export default UserRole;
