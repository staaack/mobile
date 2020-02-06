import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';
import { TCardsProps } from './cards.d';

const Operations: React.FC<TCardsProps> = ({
  navigation,
  amount,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onOperationCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'OperationInvestments',
    });
  return (
    <Card
      onCardPress={onOperationCardPress}
      topic={translations['cards.operations']}
      amount={amount}
      leftIconSource={icons.task}
    />
  );
};

export const OperationsCard = withNavigation(Operations);
