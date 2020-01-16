import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const SlideComponent: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <View
      style={{
        width: '80%',
        marginLeft: 30,
        height: 140,
        padding: 10,
        alignSelf: 'center',
      }}>
      {children}
    </View>
  );
};

export default SlideComponent;
