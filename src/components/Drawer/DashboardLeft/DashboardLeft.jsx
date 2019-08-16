// @flow
import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationService, routes } from '~/navigation';
import { showDrawerLeft } from '~/store/dashboard/actions';
import {
  UserImage,
  CloseBlueIcon,
  BrushIcon,
  CommunityIcon,
  DesignsIcon,
  HomeIcon,
  MarketplaceBlueIcon,
  ProtectKeyIcon,
  WalletIcon,
  LogoutIcon,
} from '~/assets/image';
import { Text, WrapperScroll, Wrapper } from '~/components';
import styles from './styles';

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
    <Icon height={20} width={21} />
    <Text style={styles.liText}>{text}</Text>
  </TouchableOpacity>
);

const DashboardLeft = ({ open, setHide }: Props) => {
  if (!open) return null;

  const translateX = new Animated.Value(-300);
  const opacity = new Animated.Value(0);

  const logout = () => {
    setHide();
    NavigationService.navigate(routes.root.Welcome);
  };

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
          toValue: -300,
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
            <Li Icon={HomeIcon} text="HOME" onPress={() => {}} />
            <Li Icon={BrushIcon} text="CREATE" onPress={() => {}} />
            <Li Icon={ProtectKeyIcon} text="PROTECT" onPress={() => {}} />
            <Li Icon={MarketplaceBlueIcon} text="MARKETPLACE" onPress={() => {}} />
            <Li Icon={CommunityIcon} text="COMMUNITY" onPress={() => {}} />
            <Li Icon={DesignsIcon} text="YOUR DESIGNS" onPress={() => {}} />
            <Li Icon={WalletIcon} text="YOUR WALLET" onPress={() => {}} />
          </WrapperScroll>

          <Li
            Icon={LogoutIcon}
            text="LOGOUT"
            onPress={logout}
          />
        </Wrapper>
      </LinearGradient>
    </Animated.View>
  );
};

export default connect(state => ({
  open: state.dashboard.drawerLeft,
}),
{
  setHide: () => showDrawerLeft(false),
})(DashboardLeft);
