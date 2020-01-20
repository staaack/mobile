import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import styles from './styles';
import Metrics from '../../styles/Metrics';

interface TProps {}

const FirstRoute = (): ReactElement => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = (): ReactElement => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = (): ReactElement => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const TabsView: React.FC<TProps> = (): JSX.Element => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      swipeEnabled={true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Metrics.screenWidth }}
      sceneContainerStyle={{
        backgroundColor: '#000',
        marginTop: 50,
      }}
    />
  );
};

export default TabsView;
