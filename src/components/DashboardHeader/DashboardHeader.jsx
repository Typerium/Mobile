// @flow
import React, { useEffect, useState } from 'react';
import {
  View, TouchableOpacity, Animated, Easing,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { MenuIcon, UserImage } from '~/assets/image';
import { showDrawerLeft, showDrawerRight } from '~/store/dashboard/actions';
import { Text } from '~/components';
import styles from './styles';

type Props = {
  screenData: {
    titleSmall: string,
    title: string,
    titleColor: string,
    subscription: string,
    background: any,
  },
  style?: View.propTypes.style,
  visible: boolean,
  drawerLeft: () => {},
  drawerRight: () => {},
}

const opacity = new Animated.Value(1);
const translateY = new Animated.Value(0);

const DashboardHeader = React.memo((
  {
    style,
    visible,
    drawerLeft,
    drawerRight,
    screenData,
  }: Props,
) => {
  const [data, setData] = useState({
    titleSmall: '',
    title: '',
    titleColor: '',
    subscription: '',
    background: '',
  });
  const [backgroundPrev, setBackgroundPrev] = useState(null);

  const slideEffect = [
    Animated.timing(
      opacity,
      {
        toValue: visible ? 1 : 0,
        duration: 400,
        delay: visible ? 400 : 0,
        easing: Easing.sin,
        useNativeDriver: true,
      },
    ),
    Animated.timing(
      translateY,
      {
        toValue: visible ? 0 : -145,
        duration: 800,
        easing: Easing.sin,
        useNativeDriver: true,
      },
    ),
  ];

  // Opacity effect when changing the navigator
  useEffect(() => {
    Animated.parallel([
      ...slideEffect,
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.sin,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setData(screenData);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.sin,
        useNativeDriver: true,
      }).start(() => {
        setBackgroundPrev(screenData.background);
      });
    });
  }, [screenData.title]);
  // Scroll effect (hide/show)
  useEffect(() => {
    Animated.parallel(slideEffect).start();
  }, [visible]);

  const opacitySmallHeader = translateY.interpolate({
    inputRange: [-145, -40],
    outputRange: [1, 0],
  });
  const opacityBackgroundPrev = translateY.interpolate({
    inputRange: [-20, -0],
    outputRange: [0, 1],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.Image
        style={[styles.background, { opacity: opacityBackgroundPrev }]}
        source={backgroundPrev}
      />
      <Animated.Image
        style={[styles.background, { opacity }]}
        source={data.background || null}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={drawerLeft}>
          <MenuIcon
            width={31}
            height={23}
          />
        </TouchableOpacity>
        <Animated.Text
          style={[styles.titleSmall, { opacity: opacitySmallHeader }]}
        >
          {data.titleSmall}
        </Animated.Text>
        <TouchableOpacity onPress={drawerRight}>
          <UserImage
            width={40}
            height={40}
          />
        </TouchableOpacity>
      </View>

      <Animated.View style={{
        width: '100%',
        opacity,
        height: 145,
        transform: [{ translateY }],
        justifyContent: 'flex-end',
      }}
      >
        <Text style={styles.title}>{data.title}</Text>
        <Text style={[styles.title, styles.color]}>{data.titleColor}</Text>
        <Text style={[styles.title, styles.subscription]}>{data.subscription}</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#25272E', '#FFFFFF', '#25272E']}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
});

DashboardHeader.defaultProps = {
  style: {},
};

export default connect(state => ({
  screenData: {
    screen: state.dashboard.screen,
    titleSmall: state.dashboard.titleSmall,
    title: state.dashboard.title,
    titleColor: state.dashboard.titleColor,
    subscription: state.dashboard.subscription,
    background: state.dashboard.background,
  },
  visible: state.dashboard.visibleTabs,
}),
{
  drawerLeft: () => showDrawerLeft(true),
  drawerRight: () => showDrawerRight(true),
})(DashboardHeader);
