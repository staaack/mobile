import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { TContextValue, LocalizationContext } from '../../localization';

interface Props extends TNavigationProps {}

const WorkingDays: React.SFC<Props> = ({ navigation }): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onWorkingDaysCardPress: () => void = () =>
    navigation!.navigate({
      routeName: '',
    });

  return (
    <Card
      onCardPress={onWorkingDaysCardPress}
      topic={translations['cards.workingDays']}
      amount="256"
      leftIconSource={icons.calendar}
    />
  );
};

// @ts-ignore
export const WorkingDaysCard = withNavigation(WorkingDays);
