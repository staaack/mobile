import React from 'react';

import { CustomText as Text } from '../../../../components/TextPoppinsFont';

import styles from './styles';

interface Props {
  userName: string;
}

export const UserName: React.FC<Props> = ({ userName }): JSX.Element => {
  return <Text style={styles.userName}>{userName}</Text>;
};
