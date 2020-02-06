import React, { useContext } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';

interface TProps extends NavigationInjectedProps {
  amount: string;
}

const Consulting: React.FC<TProps> = ({ navigation, amount }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);
  const onConsultingPress: () => void = () =>
    navigation!.navigate({
      routeName: 'ConsultingRenenues',
    });

  return (
    <Card
      onCardPress={onConsultingPress}
      topic={translations['cards.consulting']}
      amount={amount}
      leftIconSource={icons.group}
    />
  );
};

export const ConsultingCard = withNavigation(Consulting);
