import React, { useState, ComponentType, ReactElement } from 'react';
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

  const _renderTabBar = (): ReactElement => {
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
              onPress={() => updateIndex(i)}
            >
              <Animated.Text
                style={[
                  {
                    color: tabTitlecolor,
                    textAlign: 'center',
                  },
                  index === i && { fontWeight: '700' },
                ]}
              >
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
