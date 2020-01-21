import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';

const RevenuesRoute: React.SFC<{}> = (): ReactElement => (
  <RouteWrapper>
    <View>
      <Text>I am RevenuesRoute</Text>
    </View>
  </RouteWrapper>
);

export default RevenuesRoute;
