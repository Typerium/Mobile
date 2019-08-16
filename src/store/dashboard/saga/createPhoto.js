// @flow
import { takeLatest } from 'redux-saga/effects';

import { NavigationService, routes } from '~/navigation';
import types from '../types';

export function* createPhotoSaga(): any {
  try {
    yield NavigationService.navigate(routes.root.Camera);
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.CREATE_PHOTO, createPhotoSaga);
}
