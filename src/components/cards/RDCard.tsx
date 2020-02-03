import React, { useContext } from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';
import { TContextValue, LocalizationContext } from '../../localization';

interface TProps extends TNavigationProps {}

const RD: React.FC<TProps> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onRDCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'RDInvestments',
    });

  return (
    <Card
      onCardPress={onRDCardPress}
      topic={translations['cards.rd']}
      amount="$2,000.00"
      leftIconSource={icons.flask}
    />
  );
};

//@ts-ignore
export const RDCard = withNavigation(RD);
