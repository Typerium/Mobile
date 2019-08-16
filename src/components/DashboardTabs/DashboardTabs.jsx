// @flow

import React, { useEffect } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import {
  createIcon,
  templatesIcon,
  marketplaceIcon,
  protectIcon,
  notificationsIcon,
} from '~/assets/image';

type Props={
  visible: boolean,
  select?: string,
  style?: View.propTypes.style,
}

type IconTouchProps={
  opacity: number,
  Icon: any,
  onPress: any,
  style?: any,
  width: number,
  height: number,
}

const IconTouch = ({
  opacity, Icon, onPress, style, width, height,
}: IconTouchProps) => (
  <View
    style={[styles.iconContainer, style]}
  >
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconTouch, { opacity }]}
    >
      <Icon
        width={width}
        height={height}
      />
    </TouchableOpacity>
  </View>
);

const translateY = new Animated.Value(0);

IconTouch.defaultProps = {
  style: {},
};

const DashboardHeader = (
  {
    select,
    style,
    visible,
  }: Props,
) => {
  useEffect(() => {
    Animated.timing(
      translateY,
      {
        toValue: visible ? 0 : 200,
        duration: 800,
        easing: Easing.sin,
        useNativeDriver: true,
      },
    ).start();
  }, [visible]);

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <View style={[styles.container, style]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#25272E', '#FFFFFF', '#25272E']}
          style={styles.gradient}
        />

        <IconTouch
          opacity={select === 'marketplace' ? 1 : 0.5}
          Icon={templatesIcon}
          onPress={() => {}}
          width={20}
          height={20}
        />
        <IconTouch
          opacity={select === 'marketplace' ? 1 : 0.5}
          Icon={protectIcon}
          onPress={() => {}}
          width={20}
          height={20}
        />
        <IconTouch
          opacity={select === 'create' ? 1 : 0.5}
          Icon={createIcon}
          onPress={() => {}}
          style={styles.create}
          width={20}
          height={20}
        />
        <IconTouch
          opacity={select === 'notifications' ? 1 : 0.5}
          Icon={notificationsIcon}
          onPress={() => {}}
          width={20}
          height={20}
        />
        <IconTouch
          opacity={select === 'marketplace' ? 1 : 0.5}
          Icon={marketplaceIcon}
          onPress={() => {}}
          width={20}
          height={20}
        />
      </View>

    </Animated.View>
  );
};

DashboardHeader.defaultProps = {
  select: 'create',
  style: {},
};

export default connect(state => ({
  visible: state.dashboard.visibleTabs,
}))(DashboardHeader);
