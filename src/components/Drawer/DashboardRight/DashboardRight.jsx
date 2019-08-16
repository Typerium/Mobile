// @flow
import React from 'react';
import {
  View, TouchableOpacity, Animated, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { showDrawerRight } from '~/store/dashboard/actions';
import {
  WalletIcon,
  CollectionIcon,
  MessagesIcon,
  SettingsIcon,
  TermsIcon,
  UserIcon,
  CloseBlueIcon,
  UserImage,
} from '~/assets/image';
import { Text, WrapperScroll, Wrapper } from '~/components';
import styles from './styles';

const { width } = Dimensions.get('window');

type Props = {
  open: boolean,
  setHide: () => {}
}

const Li = ({
  Icon, text, onPress,
}: {
  Icon: any,
  text: string,
  onPress: Function,
}) => (
  <TouchableOpacity
    style={styles.liContainer}
    onPress={onPress}
  >
    <Text style={styles.liText}>{text}</Text>
    <Icon height={20} width={21} />
  </TouchableOpacity>
);

const DashboardRight = ({ open, setHide }: Props) => {
  if (!open) return null;

  const translateX = new Animated.Value(width);
  const opacity = new Animated.Value(0);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(
        opacity,
        {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        },
      ),
      Animated.timing(
        translateX,
        {
          toValue: width,
          useNativeDriver: true,
        },
      ),
    ]).start(() => { setHide(); });
  };

  (() => {
    Animated.parallel([
      Animated.timing(
        opacity,
        {
          toValue: 1,
          useNativeDriver: true,
        },
      ),
      Animated.timing(
        translateX,
        {
          toValue: 0,
          useNativeDriver: true,
        },
      ),
    ]).start();
  })();

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX }] },
      ]}
    >
      <Animated.View style={[styles.empty, { opacity }]}>
        <TouchableOpacity
          onPress={handleClose}
          style={styles.emptyTouch}
          activeOpacity={1}
        />
      </Animated.View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#25272E', '#FFFFFF', '#25272E']}
        style={styles.gradient}
      >
        <Wrapper style={styles.draw}>

          <TouchableOpacity onPress={handleClose} style={styles.closeTouch}>
            <CloseBlueIcon width={20} height={20} />
          </TouchableOpacity>
          <View style={styles.userContainer}>
            <UserImage width={50} height={50} />
            <Text style={styles.username}>syn33</Text>
          </View>

          <WrapperScroll styleContent={styles.menu}>
            <Li Icon={UserIcon} text="MY ACCOUNT" onPress={() => {}} />
            <Li Icon={MessagesIcon} text="MESSAGES" onPress={() => {}} />
            <Li Icon={WalletIcon} text="MY WALLET" onPress={() => {}} />
            <Li Icon={CollectionIcon} text="MY COLLECTION" onPress={() => {}} />
            <Li Icon={SettingsIcon} text="SETTINGS" onPress={() => {}} />
            <Li Icon={TermsIcon} text="TEARMS & PRIVACY" onPress={() => {}} />
          </WrapperScroll>

          <View style={styles.space} />
        </Wrapper>
      </LinearGradient>
    </Animated.View>
  );
};

export default connect(state => ({
  open: state.dashboard.drawerRight,
}),
{
  setHide: () => showDrawerRight(false),
})(DashboardRight);
