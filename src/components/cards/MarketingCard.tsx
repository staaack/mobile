import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';
import { TCardsProps } from './cards.d';

const Marketing: React.FC<TCardsProps> = ({
  navigation,
  amount,
}): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onMarketingCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'MarketingInvestments',
    });

  return (
    <Card
      onCardPress={onMarketingCardPress}
      topic={translations['cards.marketing']}
      amount={amount}
      leftIconSource={icons.tv}
      isTrendingUp={false}
    />
  );
};

export const MarketingCard = withNavigation(Marketing);
