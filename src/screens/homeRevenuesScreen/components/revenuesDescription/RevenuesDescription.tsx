import React, { useContext } from 'react';
import { View } from 'react-native';

import { Money } from './Money';
import styles from './styles';
import { TContextValue, LocalizationContext } from '../../../../localization';
import { TGlobalContext, GlobalContext } from '../../../../context';

interface IProps {
  objective: string;
  current: string;
}

export const RevenuesDescription: React.SFC<IProps> = React.memo(
  ({ objective, current }): JSX.Element => {
    const { translations } = useContext<TContextValue>(LocalizationContext);

    return current && objective ? (
      <View style={styles.container}>
        <Money title={translations['home.currentEarning']} amount={current} />
        <Money
          title={translations['home.revenuesObjective']}
          amount={objective}
        />
      </View>
    ) : (
      <View />
    );
  },
);
