import React, { useCallback } from 'react';
import { withNavigation } from 'react-navigation';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface IProps {
  cardTitle: string;
  amount: string;
  onCardPress: () => void;
}

const Training: React.SFC<IProps> = React.memo(
  ({ cardTitle, amount, onCardPress }): JSX.Element => {
    return (
      <Card
        onCardPress={onCardPress}
        topic={cardTitle}
        amount={amount}
        leftIconSource={icons.bookBookmark}
      />
    );
  },
);

//@ts-ignore
export const TrainingCard = withNavigation(Training);
