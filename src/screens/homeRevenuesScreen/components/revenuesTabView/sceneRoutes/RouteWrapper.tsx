import React, { ReactNode, ReactElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

interface TProps {
  children: ReactNode;
}

const RouteWrapper: React.SFC<TProps> = ({ children }): ReactElement => {
  return <View style={styles.container}>{children}</View>;
};

export default RouteWrapper;
