import React, { useContext } from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends TNavigationProps {}

const HRPayroll: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onHRCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'HRInvestments',
    });

  return (
    <Card
      onCardPress={onHRCardPress}
      topic={translations['cards.hrPayroll']}
      amount="$500.00"
      leftIconSource={icons.group}
    />
  );
};

//@ts-ignore
export const HRPayrollCard = withNavigation(HRPayroll);
