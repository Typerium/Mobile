/* eslint-disable import/prefer-default-export */
// @flow
import types from './types';

import type { Screen, DataScroll } from '~/store/types/Dashboard';

export const showDrawerLeft = (drawerLeft: boolean): {} => ({
  type: types.SHOW_DRAWER_LEFT,
  payload: { drawerLeft },
});

export const showDrawerRight = (drawerRight: boolean): {} => ({
  type: types.SHOW_DRAWER_RIGHT,
  payload: { drawerRight },
});

export const showTabs = (visibleTabs: boolean): {} => ({
  type: types.SHOW_TABS,
  payload: { visibleTabs },
});

export const changeScreen = (screen: string): {} => ({
  type: types.CHANGE_SCREEN,
  payload: { screen },
});

export const setScreen = (data: Screen): {} => ({
  type: types.SET_SCREEN,
  payload: data,
});

export const setScreenData = (dataScroll: Array<DataScroll>): {} => ({
  type: types.SET_SCREEN_DATA,
  payload: { dataScroll },
});

export const createPhoto = (): {} => ({
  type: types.CREATE_PHOTO,
});
