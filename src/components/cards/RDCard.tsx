import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';
import { TCardsProps } from './cards.d';

const RD: React.FC<TCardsProps> = ({ navigation, amount }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onRDCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'RDInvestments',
    });

  return (
    <Card
      onCardPress={onRDCardPress}
      topic={translations['cards.rd']}
      amount={amount}
      leftIconSource={icons.flask}
    />
  );
};

export const RDCard = withNavigation(RD);
