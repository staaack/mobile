import React, { useContext } from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends NavigationInjectedProps {
  amount: string;
}

const WorkingDays: React.SFC<Props> = ({ navigation, amount }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onWorkingDaysCardPress: () => void = () =>
    navigation!.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onWorkingDaysCardPress}
      topic={translations['cards.workingDays']}
      amount={amount}
      leftIconSource={icons.calendar}
    />
  );
};

// @ts-ignore
export const WorkingDaysCard = withNavigation(WorkingDays);
