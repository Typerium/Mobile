// @flow
import React from 'react';
import { takeLatest, put, delay } from 'redux-saga/effects';
import CameraRoll from '@react-native-community/cameraroll';

import { CameraIcon } from '~/assets/image';
import { setScreen, setScreenData, showTabs } from '~/store/dashboard/actions';
import { setSelection, setSelectionData } from '~/store/modals/actions';
import searchVertival from '~/utils/searchVertival';
import { checkAndroidPermission } from '~/utils/permissions';
import types from '../types';

import dataStock from './exapmple/stock';
import dataLayouts from './exapmple/layouts';
import dataQuotes from './exapmple/quotes';
import dataTemplates from './exapmple/templates';
import dataBackgrounds from './exapmple/backgrounds';
import dataMyPhotos from './exapmple/myphotos';

export const menu_list = ['LAYOUTS', 'STOCK', 'TEMPLATES', 'MY PHOTOS', 'QUOTES', 'BACKGROUNDS'];

type Action = {
  payload: {
    screen: string
  }
}

function* set(data) {
  if (data.screen) {
    yield put(setScreen(data.screen));
  }
  if (data.selections) {
    yield put(setSelection(data.selections[0]));
    yield put(setSelectionData(data.selections));
  }
  if (data.items) {
    yield put(setScreenData([]));
    yield delay(200);
    yield put(setScreenData(searchVertival([...data.items])));
  }
}

export function* changeScreenSaga(
  {
    payload: {
      screen,
    },
  }: Action,
): any {
  try {
    yield put(showTabs(true));
    switch (screen) {
      case 'LAYOUTS': {
        yield set(dataLayouts);
        break;
      }
      case 'STOCK': {
        yield set(dataStock);
        break;
      }
      case 'QUOTES': {
        yield set(dataQuotes);
        break;
      }
      case 'TEMPLATES': {
        yield set(dataTemplates);
        break;
      }
      case 'BACKGROUNDS': {
        yield set(dataBackgrounds);
        break;
      }
      case 'MY PHOTOS': {
        yield checkAndroidPermission();
        const gallery = yield CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        });
        const items = gallery.edges.map(({ node: { image } }, index) => ({
          key: `${image.filename}-${index}`,
          src: image.uri,
          vertical: false,
          horizontal: false,
        }));
        items.unshift(
          {
            key: 'camera',
            src: null,
            element: <CameraIcon />,
            vertical: false,
            horizontal: false,
          },
        );
        yield set({ ...dataMyPhotos, items });
        break;
      }
      default: {
        break;
      }
    }
  } catch (e) {
    console.warn(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.CHANGE_SCREEN, changeScreenSaga);
}
