// @flow
import type { SelectT } from '~/store/types/Modals';
import types from './types';

export type Modals = {
  open: boolean,
  phoneCode: string,
  phoneCodeCountry: string,
  showSelection: boolean,
  select: SelectT,
  selectionData: Array<SelectT>,
}

type actionType = {
  type: string,
  payload: Modals
}

const initialState = {
  open: false,
  modal_phoneCode: false,
  modal_resetPassword: false,
  modal_offline: false,
  phoneCode: '',
  phoneCodeCountry: '',
  showSelection: false,
  select: {
    title: '',
    value: '',
  },
  selectionData: [],
};

export default (state: Modals = initialState, action: actionType) => {
  switch (action.type) {
    case types.SHOW_PHONE_CODES: {
      return {
        ...state,
        modal_phoneCode: action.payload.open,
      };
    }
    case types.SHOW_RESET_PASSWORD: {
      return {
        ...state,
        modal_resetPassword: action.payload.open,
      };
    }
    case types.SHOW_OFFLINE: {
      return {
        ...state,
        modal_offline: action.payload.open,
      };
    }
    case types.SET_PHONE_CODE: {
      return {
        ...state,
        phoneCode: action.payload.phoneCode,
        phoneCodeCountry: action.payload.phoneCodeCountry,
      };
    }
    case types.SHOW_SELECTION: {
      return {
        ...state,
        showSelection: action.payload.open,
      };
    }
    case types.SET_SELECTION: {
      return {
        ...state,
        select: action.payload.select,
      };
    }
    case types.SET_SELECTION_DATA: {
      return {
        ...state,
        selectionData: action.payload.selectionData,
      };
    }
    default:
      return state;
  }
};
