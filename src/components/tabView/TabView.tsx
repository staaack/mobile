import React, { useState, ReactElement, ElementType } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import styles from './styles';
import { Metrics, Colors } from '../../styles';

export interface TTabsViewProps {
  routes: Array<{ key: string; title: string }>;
  sceneMap: {
    [key: string]: React.ComponentType<any>;
  };
}

export const TabsView: React.SFC<TTabsViewProps> = React.memo(
  ({ routes, sceneMap }): JSX.Element => {
    const [index, updateIndex] = useState<number>(0);

    const _handleIndexChange = (index: number) => updateIndex(index);

    const _renderTabBar = (): ReactElement => {
      return (
        <View style={styles.tabBar}>
          {routes.map((route, i) => {
            const tabTitlecolor = i === index ? Colors.BLACK : Colors.TEXT_GREY;

            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.tabItem,
                  index === i && {
                    borderBottomColor: Colors.MAIN_COLOR,
                    borderBottomWidth: Metrics.tabItemBorderWidth,
                  },
                ]}
                onPress={() => updateIndex(i)}
              >
                <Animated.Text
                  style={[
                    {
                      fontFamily: 'Poppins',
                      fontWeight: 'normal',
                      color: tabTitlecolor,
                      flexWrap: 'nowrap',
                      marginBottom: Metrics.smallMargin,
                      fontSize: Metrics.tinyTextSize,
                      textAlign: 'center',
                    },
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
        sceneContainerStyle={{ backgroundColor: Colors.LIGHT_GREY }}
      />
    );
  },
);
