import React, { useContext } from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends TNavigationProps {}

const Operations: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onOperationCardPress: () => void = () =>
    navigation!.navigate({
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

// @ts-ignore
export const OperationsCard = withNavigation(Operations);
