// @flow
import types from './types';

export type Welcome = {
  email: string,
}

type actionType = {
  type: string,
  payload: Welcome
}

const initialState = {
  email: 'sindy@typerium.io',
};

export default (state: Welcome = initialState, action: actionType) => {
  switch (action.type) {
    case types.SET_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    default:
      return state;
  }
};
