import React from 'react';
import { ProgressBar } from '../../../components/progressBar';

interface Props {}

const RevenuesProgress: React.FC<Props> = (): JSX.Element => {
  return <ProgressBar percentage={50} />;
};

export default RevenuesProgress;
