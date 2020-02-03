import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';
import { TNavigationProps } from '../../screens/homeRevenuesScreen/components/revenuesTabView/sceneRoutes/TeamRoute';
import { LocalizationContext, TContextValue } from '../../localization';

interface Props extends TNavigationProps {}

const Education: React.FC<Props> = ({ navigation }) => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onEducationCardPress: () => void = () =>
    navigation!.navigate({
      routeName: 'EducationInvestments',
    });

  return (
    <Card
      onCardPress={onEducationCardPress}
      topic={translations['cards.education']}
      amount="$3,000.00"
      leftIconSource={icons.graduation}
      isTrendingUp={false}
    />
  );
};

//@ts-ignore
export const EducationCard = withNavigation(Education);
