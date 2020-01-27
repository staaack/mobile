import React from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface TProps extends TNavigationProps {}

const Consulting: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const onConsultingPress: () => void = () =>
    navigation.navigate({
      routeName: 'ConsultingRenenues',
    });

  return (
    <Card
      onCardPress={onConsultingPress}
      topic="Consulting"
      amount="$13,000.00"
      leftIconSource={icons.group}
    />
  );
};

export const ConsultingCard = withNavigation(Consulting);
