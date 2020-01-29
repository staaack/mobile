import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { SlideComponent } from './SlideComponent';
import styles from './styles';
import ShareData from './carouselItems/ShareData';
import TrackConribution from './carouselItems/TrackConribution';
import HelpBuildEnv from './carouselItems/HelpBuildEnv';
import { Metrics } from '../../../../../styles/Metrics';

export const LoginCarousel: React.SFC<{}> = React.memo(
  (): JSX.Element => {
    const [entries] = useState<Array<string>>(['SHARE', 'TRACK', 'HELP']);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const _renderItem = useCallback(({ item }): JSX.Element => {
      return (
        <SlideComponent>
          {item === 'SHARE' && <ShareData />}
          {item === 'TRACK' && <TrackConribution />}
          {item === 'HELP' && <HelpBuildEnv />}
        </SlideComponent>
      );
    }, []);

    const pagination: React.ReactElement = (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        dotStyle={[styles.dotStyle, styles.commonDotStyle]}
        inactiveDotStyle={[styles.inactiveDotsStyle, styles.commonDotStyle]}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );

    return (
      <View>
        <Carousel
          autoplay={true}
          loop={true}
          data={entries}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveSlide(index)}
          itemWidth={Metrics.screenWidth}
          sliderWidth={Metrics.screenWidth}
        />
        {pagination}
      </View>
    );
  },
);
