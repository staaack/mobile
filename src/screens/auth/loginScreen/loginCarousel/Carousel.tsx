import React, { useState } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SlideComponent from './SlideComponent';

import styles from './styles';
import Colors from '../../../../styles/theme/colors';

const LoginCarousel: React.SFC<{}> = () => {
  const [entries] = useState<Array<string>>(['SHARE', 'TRACK', 'HELP']);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const _renderItem = ({ item }) => {
    return <SlideComponent data={item} />;
  };

  const pagination: React.ReactElement = (
    <Pagination
      dotsLength={3}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: Colors.APP_COLOR,
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
        width: 8,
        height: 8,
        backgroundColor: 'grey',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <View>
      <Carousel
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveSlide(index)}
        itemWidth={400}
        sliderWidth={400}
      />
      {pagination}
    </View>
  );
};

export default LoginCarousel;
