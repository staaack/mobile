import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { LeftHeaderIcon } from '../header';

interface TProps {
  onBackIconPress?: () => void;
}

export const DescriptionHeader: React.SFC<TProps> = ({
  children,
  onBackIconPress,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      {typeof onBackIconPress !== 'undefined' && (
        <LeftHeaderIcon
          onIconPress={onBackIconPress}
          customStyles={{ marginLeft: 0 }}
        />
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};
