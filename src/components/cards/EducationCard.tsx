import React, { useContext } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { LocalizationContext, TContextValue } from '../../localization';
import { TCardsProps } from './cards';

const Education: React.FC<TCardsProps> = ({ navigation, amount }) => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onEducationCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'EducationInvestments',
    });

  return (
    <Card
      onCardPress={onEducationCardPress}
      topic={translations['cards.education']}
      amount={amount}
      leftIconSource={icons.graduation}
      isTrendingUp={false}
    />
  );
};

//@ts-ignore
export const EducationCard = withNavigation(Education);
