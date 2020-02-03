import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

interface AppProps {}

export const ScrollViewWrapper: React.SFC<AppProps> = React.memo(
  ({ children }): JSX.Element => {
    return (
      <ScrollView
        nestedScrollEnabled
        style={styles.scrollView}
        keyboardShouldPersistTaps="always"
        alwaysBounceVertical={true}
      >
        {children}
      </ScrollView>
    );
  },
);
