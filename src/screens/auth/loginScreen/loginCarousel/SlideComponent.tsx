import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  data?: any;
}

const SlideComponent: React.FC<Props> = ({ data }): JSX.Element => {
  console.log(data);
  return (
    <View
      style={{
        width: '80%',
        marginLeft: 30,
        height: 150,
        borderWidth: 2,
        borderColor: 'black',
      }}>
      <Text>Hello Slide</Text>
    </View>
  );
};

export default SlideComponent;
