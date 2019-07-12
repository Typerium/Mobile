/* eslint-disable import/prefer-default-export */
// @flow
import types from './types';

type authType = {
  email: string,
  password: string,
}

export const authSaga = ({ email, password }: authType): {} => ({
  type: types.AUTH,
  payload: { email, password },
});
