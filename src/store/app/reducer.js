// @flow
import types from './types';

export type App = {
  balance: string,
  loading: boolean,
}

type actionType = {
  type: string,
  payload: App
}

const initialState = {
  balance: '',
  loading: false,
};

export default (state: App = initialState, action: actionType) => {
  switch (action.type) {
    case types.SET_BALANCE: {
      return {
        ...state,
        balance: action.payload.balance,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
};
