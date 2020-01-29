import React, { useContext } from 'react';
import { View } from 'react-native';

import { Money } from './Money';
import styles from './styles';
import {
  TContextValue,
  LocalizationContext,
} from '../../../../localization/LocalizationContext';

export const RevenuesDescription: React.FC<{}> = (): JSX.Element => {
  const { translations } = useContext<TContextValue>(LocalizationContext);

  return (
    <View style={styles.container}>
      <Money title={translations['home.currentEarning']} amount="1,550,000" />
      <Money
        title={translations['home.revenuesObjective']}
        amount="2,256,000"
      />
    </View>
  );
};
