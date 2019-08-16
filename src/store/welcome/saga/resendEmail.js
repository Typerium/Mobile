// @flow
import {
  takeLatest,
} from 'redux-saga/effects';

import { store } from '~/store';
import { PUB } from '~/api';
// $FlowFixMe
import { resetPassword as mutation } from '~/store/mutations.graphql';
import types from '../types';

export function* resendEmail(): Iterable<any> {
  try {
    const { email } = store.getState().welcome;
    yield PUB(mutation, {
      email,
    });
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.RESEND_EMAIL, resendEmail);
}
