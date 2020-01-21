import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';

const InvestmentsRoute: React.SFC<{}> = (): ReactElement => (
  <RouteWrapper>
    <View>
      <Text>Investments</Text>
    </View>
  </RouteWrapper>
);

export default InvestmentsRoute;
