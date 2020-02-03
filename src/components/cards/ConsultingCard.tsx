import React, { useContext } from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';
import { TContextValue, LocalizationContext } from '../../localization';

interface TProps extends TNavigationProps {}

const Consulting: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onConsultingPress: () => void = () =>
    navigation!.navigate({
      routeName: 'ConsultingRenenues',
    });

  return (
    <Card
      onCardPress={onConsultingPress}
      topic={translations['cards.consulting']}
      amount="$13,000.00"
      leftIconSource={icons.group}
    />
  );
};

// @ts-ignore
export const ConsultingCard = withNavigation(Consulting);
