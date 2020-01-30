import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { TContextValue, LocalizationContext } from '../../localization';

interface TProps extends TNavigationProps {}

const Marketing: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onMarketingCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'MarketingInvestments',
    });

  return (
    <Card
      onCardPress={onMarketingCardPress}
      topic={translations['cards.marketing']}
      amount="$2,000.00"
      leftIconSource={icons.tv}
      isTrendingUp={false}
    />
  );
};

//@ts-ignore
export const MarketingCard = withNavigation(Marketing);
