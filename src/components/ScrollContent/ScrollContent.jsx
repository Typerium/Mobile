// @flow

import React, { useEffect, useRef } from 'react';
import {
  Animated, Image, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';

import { showTabs } from '~/store/dashboard/actions';
import styles, { flatItemImage } from './styles';

let lastPosition = 0;
let lastTime = Date.now();
const minHeight = new Animated.Value(0);

type Props = {
  data: Array<any>,
  tabs: (boolean) => {},
  visibleTabs: boolean,
  screen: string,
  onPress: () => {}
}

const ScrollContent = ({
  data, tabs, visibleTabs, screen, onPress,
}: Props) => {
  const scrollRef = useRef(null);

  useEffect(() => () => tabs(false), []);
  useEffect(() => {
    lastTime = Date.now() + 1000;
  }, [visibleTabs]);
  // When switching to another screen
  useEffect(() => {
    if (data.length) {
      scrollRef.current.getNode()
        .scrollToOffset({ offset: 0, animated: false });
    }
  }, [screen]);

  const handle = (src, element, key) => {
    onPress({ src, element, key });
  };

  const _renderItem = ({
    item: {
      vertical, horizontal, src, element, key, height, empty,
    },
  }: any) => {
    const customStyle = [flatItemImage(vertical, horizontal, height, empty).style];
    const wrapperStyle = [
      styles.flatItem,
      height && { height },
      { zIndex: (vertical || horizontal) ? 20 : 1 },
    ];
    return (
      <View style={wrapperStyle}>
        <TouchableOpacity
          onPress={() => handle(src, element, key)}
          style={customStyle}
          disable={empty}
        >
          {element ? (
            <View style={[
              styles.element,
              ...customStyle,
            ]}
            >
              {element}
            </View>
          ) : (
            <Image
              style={customStyle}
              source={{ uri: src }}
            />
          )}
        </TouchableOpacity>

      </View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={({ key }, index) => `${key}-${index}`}
      bounces={false}
      onScrollBeginDrag={({ nativeEvent: { contentOffset: { y } } }) => { lastPosition = y; }}
      onScroll={({ nativeEvent: { contentOffset: { y } } }) => {
        if (y < 20) return tabs(true);
        if ((Date.now() - lastTime) < 200) return null;
        if ((lastPosition - 200) > y) return tabs(true);
        if ((lastPosition + 200) < y) return tabs(false);
        return null;
      }}
      ref={scrollRef}
      style={[styles.flatlist, { minHeight }]}
      contentContainerStyle={styles.flatlistContent}
      scrollEventThrottle={16}
      numColumns={2}
      onScrollToIndexFailed={() => {}}
      onLayout={({ nativeEvent }) => {
        // Only 1 time, translateY = 145
        if (minHeight._value === 0) {
          minHeight.setValue(nativeEvent.layout.height + 145);
        }
      }}
    />
  );
};

export default connect(state => ({
  data: state.dashboard.dataScroll,
  visibleTabs: state.dashboard.visibleTabs,
  screen: state.dashboard.screen,
}),
{
  tabs: showTabs,
})(ScrollContent);
