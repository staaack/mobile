import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import RouteWrapper from './RouteWrapper';

const TeamRoute: React.FC<{}> = (): ReactElement => (
  <RouteWrapper>
    <View>
      <Text>I am TeamRoute</Text>
    </View>
  </RouteWrapper>
);

export default TeamRoute;
