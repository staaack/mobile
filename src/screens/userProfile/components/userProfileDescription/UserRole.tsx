import React from 'react';

import { CustomText as Text } from '../../../../components/TextPoppinsFont';

import styles from './styles';

interface Props {
  role: string;
}

export const UserRole: React.FC<Props> = ({ role }): JSX.Element => {
  return <Text style={styles.smallText}>{role}</Text>;
};
