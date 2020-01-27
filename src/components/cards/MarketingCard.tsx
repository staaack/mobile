import React from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';

interface TProps extends TNavigationProps {}

const Marketing: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const onMarketingCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'MarketingInvestments',
    });

  return (
    <Card
      onCardPress={onMarketingCardPress}
      topic="Marketing"
      amount="$2,000.00"
      leftIconSource={icons.tv}
      isTrendingUp={false}
    />
  );
};

export const MarketingCard = withNavigation(Marketing);
