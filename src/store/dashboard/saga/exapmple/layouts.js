/* eslint-disable global-require */
import React from 'react';

import {
  TwitterHorizontal,
  Instagram,
  Facebook,
  FacebookVertical,
  InstagramVertical,
  PinterestHorizontal,
  Steem,
  Youtube,
  SnapchatVertical,
  TumblrVertical,
  YoutubeHorizontal,
} from '~/assets/image/layouts';

const screen = {
  screen: 'LAYOUTS',
  titleSmall: 'STOCK LAYOUTS',
  title: 'Layouts for',
  titleColor: 'everything you need',
  subscription: 'Multiple platforms, multiple sizes...',
  background: require('../../../../assets/image/example/Rectangle11(5).png'),
};

const selections = [{
  title: 'Twitter',
  value: 'Twitter',
}, {
  title: 'Instagram',
  value: 'Instagram',
}, {
  title: 'Facebook',
  value: 'Facebook',
}, {
  title: 'Snapchat',
  value: 'Snapchat',
}, {
  title: 'Youtube',
  value: 'Youtube',
}, {
  title: 'Pinterest',
  value: 'Pinterest',
}, {
  title: 'Steem',
  value: 'Steem',
}];

const items = [
  {
    key: '0-tw',
    src: null,
    vertical: false,
    horizontal: true,
    element: <TwitterHorizontal />,
    height: 110,
  },
  {
    key: '1-ins',
    src: null,
    vertical: false,
    horizontal: false,
    element: <Instagram />,
  },
  {
    key: '2-fc',
    src: null,
    vertical: false,
    horizontal: false,
    element: <Facebook />,
  },
  {
    key: '3-fc',
    src: null,
    vertical: true,
    horizontal: false,
    element: <FacebookVertical />,
  },
  {
    key: '4-ins',
    src: null,
    vertical: true,
    horizontal: false,
    element: <InstagramVertical />,
  },
  {
    key: '5-pin',
    src: null,
    vertical: false,
    horizontal: true,
    element: <PinterestHorizontal />,
    height: 110,
  },
  {
    key: '6-st',
    src: null,
    vertical: false,
    horizontal: false,
    element: <Steem />,
  },
  {
    key: '7-yt',
    src: null,
    vertical: false,
    horizontal: false,
    element: <Youtube />,
  },
  {
    key: '8-snp',
    src: null,
    vertical: true,
    horizontal: false,
    element: <SnapchatVertical />,
  },
  {
    key: '9-tmb',
    src: null,
    vertical: true,
    horizontal: false,
    element: <TumblrVertical />,
  },
  {
    key: '10-yt',
    src: null,
    vertical: false,
    horizontal: true,
    element: <YoutubeHorizontal />,
    height: 110,
  },
];

export default { screen, selections, items };
