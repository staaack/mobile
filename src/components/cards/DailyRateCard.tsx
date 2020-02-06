import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';
import { TCardsProps } from './cards.d';

const DailyRate: React.SFC<TCardsProps> = ({
  navigation,
  amount,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onDailyRateCardPress: () => void = () =>
    navigation!.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onDailyRateCardPress}
      topic={translations['cards.dailyRate']}
      amount={amount}
      leftIconSource={icons.group}
    />
  );
};

export const DailyRateCard = withNavigation(DailyRate);
