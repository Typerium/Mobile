// @flow
import types from './types';

import type { Screen, DataScroll } from '~/store/types/Dashboard';

export type Dashboard = {
  drawerLeft: boolean,
  drawerRight: boolean,
  visibleTabs: boolean,
  ...Screen,
  dataScroll: Array<DataScroll>,
}

type actionType = {
  type: string,
  payload: Dashboard
}

const initialState = {
  drawerLeft: false,
  drawerRight: false,
  visibleTabs: true,
  screen: '',
  titleSmall: '',
  title: '',
  titleColor: '',
  subscription: '',
  background: null,
  dataScroll: [],
};

export default (state: Dashboard = initialState, action: actionType) => {
  switch (action.type) {
    case types.SHOW_DRAWER_LEFT: {
      return {
        ...state,
        drawerLeft: action.payload.drawerLeft,
      };
    }
    case types.SHOW_DRAWER_RIGHT: {
      return {
        ...state,
        drawerRight: action.payload.drawerRight,
      };
    }
    case types.SHOW_TABS: {
      if (state.visibleTabs === action.payload.visibleTabs) return state;
      return {
        ...state,
        visibleTabs: action.payload.visibleTabs,
      };
    }
    case types.SET_SCREEN: {
      return {
        ...state,
        screen: action.payload.screen,
        titleSmall: action.payload.titleSmall,
        title: action.payload.title,
        titleColor: action.payload.titleColor,
        subscription: action.payload.subscription,
        background: action.payload.background,
      };
    }
    case types.SET_SCREEN_DATA: {
      return {
        ...state,
        dataScroll: action.payload.dataScroll,
      };
    }
    default:
      return state;
  }
};
