// @flow
import { takeLatest, put } from 'redux-saga/effects';

import { NavigationService, routes } from '~/navigation';
import { setTokens } from '~/store/tokens/actions';
import { PUB } from '~/api';
import type { Tokens } from '~/store/types/Tokens';
import type { SignIn } from '~/store/types/Welcome';
// $FlowFixMe
import { signIn as mutation } from '~/store/mutations.graphql';
import types from '../types';

type Action = {
  payload: SignIn
}

type Result = {
  signIn: Tokens
}

export function* signInSaga(
  { payload: { login, password, remember } }: Action,
): any {
  try {
    yield NavigationService.navigate(routes.root.Dashboard);
    const { signIn }: Result = yield PUB(mutation, {
      login,
      password,
    });
    yield put(setTokens({
      accessToken: signIn.accessToken,
      refreshToken: signIn.refreshToken,
      remember,
    }));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.SIGN_IN, signInSaga);
}
