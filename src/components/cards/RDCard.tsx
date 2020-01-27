import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface TProps extends TNavigationProps {}

const RD: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const onRDCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'RDInvestments',
    });

  return (
    <Card
      onCardPress={onRDCardPress}
      topic="R&D"
      amount="$2,000.00"
      leftIconSource={icons.flask}
    />
  );
};

export const RDCard = withNavigation(RD);
