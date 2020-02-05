import React from 'react';
import { ProgressBar } from '../../../components/progressBar';

interface Props {
  percentage: number;
}

const RevenuesProgress: React.SFC<Props> = ({ percentage }): JSX.Element => {
  return <ProgressBar percentage={percentage} />;
};

export default RevenuesProgress;
