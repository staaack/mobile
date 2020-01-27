import React from 'react';
import { Image } from 'react-native';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { withNavigation } from 'react-navigation';

interface Props extends TNavigationProps {}

const HRPayroll: React.FC<Props> = ({ navigation }): JSX.Element => {
  const onHRCardPress: () => void = () =>
    navigation.navigate({
      routeName: 'RDInvestments',
    });

  return (
    <Card
      onCardPress={onHRCardPress}
      topic="HR & Payroll"
      amount="$500.00"
      leftIconSource={icons.group}
    />
  );
};

export const HRPayrollCard = withNavigation(HRPayroll);
