/* eslint-disable no-new-wrappers */
// @flow
import type { Tokens } from '~/store/types/Tokens';
import types from './types';

type actionType = {
  type: string,
  payload: Tokens
}

const initialState = {
  accessToken: '',
  refreshToken: '',
  remember: false,
};

export default (state: Tokens = Object.assign(initialState, {}), action: actionType) => {
  switch (action.type) {
    case types.SET_TOKENS: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        remember: action.payload || action.payload.remember,
      };
    }
    case types.REHYDRATE: {
      const remember = action.payload && action.payload.remember;
      if (remember) return { ...state };
      // return Object.assign(initialState, {});
      return Object.assign({}, state, {
        accessToken: new String(''),
        refreshToken: new String(''),
      });
    }
    default:
      return state;
  }
};
