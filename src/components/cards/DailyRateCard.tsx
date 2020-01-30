import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends TNavigationProps {}

const DailyRate: React.SFC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onDailyRateCardPress: () => void = () =>
    navigation!.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onDailyRateCardPress}
      topic="Daily rate"
      amount="$560.00"
      leftIconSource={icons.group}
    />
  );
};

// @ts-ignore
export const DailyRateCard = withNavigation(DailyRate);
