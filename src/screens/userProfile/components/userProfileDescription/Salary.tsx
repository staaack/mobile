import React, { ReactElement } from 'react';

import { CustomText as Text } from '../../../../components/TextPoppinsFont';

import styles from './styles';

interface Props {}

export const Salary: React.FC<Props> = (): ReactElement => {
  return <Text style={styles.smallText}>Salary</Text>;
};
