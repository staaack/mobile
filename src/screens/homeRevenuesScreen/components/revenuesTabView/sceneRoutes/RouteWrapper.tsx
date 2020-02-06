import React, { ReactNode, ReactElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

interface TProps {
  children: ReactNode;
}

export const RouteWrapper: React.SFC<TProps> = ({ children }): ReactElement => {
  return <View style={styles.container}>{children}</View>;
};
