import React, { useState, ComponentType } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, SceneRendererProps } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import Colors from '../../styles/theme/colors';
import styles from './styles';

interface TProps {
  routes: Array<{ key: string; title: string }>;
  sceneMap: {
    [key: string]: ComponentType<
      SceneRendererProps & { route: { key: string; title: string } }
    >;
  };
}

const TabsView: React.SFC<TProps> = ({ routes, sceneMap }): JSX.Element => {
  const [index, updateIndex] = useState<number>(0);

  const _handleIndexChange = (index: number) => updateIndex(index);

  const _renderTabBar = () => {
    return (
      <View style={styles.tabBar}>
        {routes.map((route, i) => {
          const tabTitlecolor =
            i === index ? 'rgb(0, 0, 0)' : 'rgb(180, 180, 170)';

          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.tabItem,
                index === i && {
                  borderBottomColor: Colors.MAIN_COLOR,
                  borderBottomWidth: 4,
                },
              ]}
              onPress={() => updateIndex(i)}>
              <Animated.Text style={{ color: tabTitlecolor }}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(sceneMap)}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
      swipeEnabled={true}
    />
  );
};

export default TabsView;

/************************************************** */

// import React, { ReactElement } from 'react';
// import { View } from 'react-native';
// import { TabView, SceneMap, } from 'react-native-tab-view';

// import styles from './styles';
// import Metrics from '../../styles/Metrics';

// interface TProps {}

// const FirstRoute = (): ReactElement => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = (): ReactElement => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

// const ThirdRoute = (): ReactElement => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

// const TabsView: React.FC<TProps> = (): JSX.Element => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//     { key: 'third', title: 'Third' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute,
//   });

//   return (
//     <TabView
//       swipeEnabled={true}
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: Metrics.screenWidth }}
//       sceneContainerStyle={{
//         backgroundColor: '#000',
//         marginTop: 50,
//       }}
//     />
//   );
// };

// export default TabsView;
