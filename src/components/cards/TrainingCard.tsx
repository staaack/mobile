import React from 'react';

import { Card } from '../customCard';
import icons from '../../assets/icons';

interface IProps {
  cardTitle: string;
  amount: string;
  onCardPress: () => void;
}

export const TrainingCard: React.SFC<IProps> = React.memo(
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
