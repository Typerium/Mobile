/* eslint-disable import/prefer-default-export */
// @flow
import type { Tokens } from '~/store/types/Tokens';
import types from './types';

export const setTokens = ({ accessToken, refreshToken, remember }: Tokens): {} => ({
  type: types.SET_TOKENS,
  payload: { accessToken, refreshToken, remember },
});
