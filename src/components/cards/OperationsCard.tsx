import React from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const Operations: React.FC<Props> = ({ navigation }): JSX.Element => {
  const onOperationCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'OperationInvestments',
    });
  return (
    <Card
      onCardPress={onOperationCardPress}
      topic="Operations"
      amount="$1,000.00"
      leftIconSource={icons.task}
    />
  );
};

export const OperationsCard = withNavigation(Operations);
