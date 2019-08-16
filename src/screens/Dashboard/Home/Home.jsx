/* eslint-disable no-unused-vars */
// @flow

import React, { useState, useEffect } from 'react';
import {
  View, TouchableOpacity, TextInput, ScrollView, Image, FlatList, Dimensions, Animated, Easing,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {
  G, Defs, Path, TextPath, Text as TextSvg,
} from 'react-native-svg';

import { forgotPassword } from '~/store/welcome/actions';
import {
  changeScreen as changeScreenAction,
  createPhoto as createPhotoAction,
} from '~/store/dashboard/actions';
import { showSelection } from '~/store/modals/actions';
import { Text, ScrollContent, DashboardHeader } from '~/components';
import LiTab from './LiTab';
import styles from './styles';
import {
  CloseBlueIcon, SearchIcon, TriangleIcon,
} from '~/assets/image';

const translateY = new Animated.Value(0);

type Props = {
  visible: boolean,
  screen: string,
  changeScreen: (string) => {},
  createPhoto: () => {},
  select: string,
  openSelection: () => {},
}

export const menu_list = ['LAYOUTS', 'STOCK', 'TEMPLATES', 'MY PHOTOS', 'QUOTES', 'BACKGROUNDS'];

const Marketplace = ({
  visible, screen, changeScreen, createPhoto, select, openSelection,
}: Props) => {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    Animated.timing(
      translateY,
      {
        toValue: visible ? 0 : -145,
        duration: 800,
        easing: Easing.sin,
        useNativeDriver: true,
      },
    ).start();
  }, [visible]);

  useEffect(() => {
    changeScreen(menu_list[0]);
  }, []);

  const handleContent = ({ key }) => {
    if (key === 'camera') {
      createPhoto();
    }
  };

  return (
    <View style={styles.container}>
      <DashboardHeader />

      <Animated.View style={{
        flex: 1,
        transform: [{ translateY }],
      }}
      >
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            {openSearch || (
            <TouchableOpacity
              onPress={openSelection}
              style={styles.filter}
            >
              <Text style={styles.filterText}>{select.value && select.title.toUpperCase()}</Text>
              <TriangleIcon />
            </TouchableOpacity>
            )}
            <LinearGradient
              colors={['#FFFFFF', 'rgba(0,0,0,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.borderGradient}
            >
              {openSearch && (
              <TextInput
                value="Search this"
                style={styles.input}
              />
              )}
            </LinearGradient>
          </View>
          <TouchableOpacity
            style={[
              styles.search,
              openSearch ? styles.searchOpen : {},
            ]}
            onPress={() => setOpenSearch(true)}
            disabled={openSearch}
          >
            <SearchIcon style={styles.searchIcon} />
          </TouchableOpacity>
          {openSearch && (
          <TouchableOpacity style={styles.close} onPress={() => setOpenSearch(false)}>
            <CloseBlueIcon style={styles.closeIcon} />
          </TouchableOpacity>
          )}
        </View>
        {/* Gallery */}
        <ScrollContent onPress={handleContent} />
        {/* Left menu */}
        <ScrollView style={styles.listMenu} contentContainerStyle={styles.listMenuContent}>
          {menu_list.map((item, index) => (
            <LiTab
              text={item}
              key={item}
              isSelect={screen === menu_list[index]}
              handle={changeScreen}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default connect(state => ({
  visible: state.dashboard.visibleTabs,
  screen: state.dashboard.screen,
  select: state.modals.select,
}), {
  forgot: forgotPassword,
  changeScreen: changeScreenAction,
  createPhoto: createPhotoAction,
  openSelection: () => showSelection(true),
})(Marketplace);
