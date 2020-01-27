import React, { useState, useCallback } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from '../styles';
import { Colors } from '../../../styles';

interface Props {}

export const DisplaySalarySwitch: React.FC<Props> = (): JSX.Element => {
  const [value, onValueChanged] = useState<boolean>(false);

  const onSwitchPress: () => void = useCallback(() => onValueChanged(!value), [
    value,
  ]);

  return (
    <View style={styles.displaySalary}>
      <Text>Display salary information</Text>
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
