import React, { useState, useCallback, useContext } from 'react';
import { View, Text, Switch } from 'react-native';

import styles from '../styles';
import { Colors } from '../../../styles';
import { TContextValue, LocalizationContext } from '../../../localization';

interface IProps {}

export const DisplaySalarySwitch: React.FC<IProps> = (): JSX.Element => {
  const [value, onValueChanged] = useState<boolean>(false);
  const { translations } = useContext<TContextValue>(LocalizationContext);

  const onSwitchPress: () => void = useCallback(() => onValueChanged(!value), [
    value,
  ]);

  return (
    <View style={styles.displaySalary}>
      <Text>{translations['settings.displaySalary']}</Text>
      <Switch
        value={value}
        onValueChange={onSwitchPress}
        thumbColor={Colors.MAIN_COLOR}
        trackColor={{
          false: 'rgba(6, 33, 51, 0.1)',
          true: '',
        }}
        ios_backgroundColor={Colors.MAIN_COLOR}
      />
    </View>
  );
};
