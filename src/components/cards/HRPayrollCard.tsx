import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';
import { TCardsProps } from './cards.d';

const HRPayroll: React.FC<TCardsProps> = ({
  navigation,
  amount,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onHRCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'HRInvestments',
    });

  return (
    <Card
      onCardPress={onHRCardPress}
      topic={translations['cards.hrPayroll']}
      amount={amount}
      leftIconSource={icons.group}
    />
  );
};

export const HRPayrollCard = withNavigation(HRPayroll);
