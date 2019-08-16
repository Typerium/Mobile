/* eslint-disable import/prefer-default-export */
// @flow
import type { SelectT } from '~/store/types/Modals';
import types from './types';

export const showPhoneCodes = (open: boolean): {} => ({
  type: types.SHOW_PHONE_CODES,
  payload: { open },
});

export const showOffline = (open: boolean): {} => ({
  type: types.SHOW_OFFLINE,
  payload: { open },
});

export const showResetPassword = (open: boolean): {} => ({
  type: types.SHOW_RESET_PASSWORD,
  payload: { open },
});

type SetPhoneCode = {
  phoneCode: string,
  phoneCodeCountry: string
}
export const setPhoneCode = ({ phoneCode, phoneCodeCountry }: SetPhoneCode): {} => ({
  type: types.SET_PHONE_CODE,
  payload: { phoneCode, phoneCodeCountry },
});

export const showSelection = (open: boolean): {} => ({
  type: types.SHOW_SELECTION,
  payload: { open },
});

export const setSelection = (select: string): {} => ({
  type: types.SET_SELECTION,
  payload: { select },
});

export const setSelectionData = (selectionData: Array<SelectT>): {} => ({
  type: types.SET_SELECTION_DATA,
  payload: { selectionData },
});
