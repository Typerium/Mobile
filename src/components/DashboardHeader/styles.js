/* eslint-disable no-nested-ternary */
import { StyleSheet } from 'react-native';

import { fitScreenSize, isIphoneX, isAndroid } from '~/utils/platform';

const paddingHorizontal = fitScreenSize(29);
const paddingTop = isIphoneX ? 44 : isAndroid ? 10 : 30;

export default StyleSheet.create({
  container: {
    paddingTop,
    width: '100%',
    backgroundColor: '#15171E',
  },
  header: {
    paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  titleSmall: {
    color: '#FFFFFF',
    fontFamily: 'F37Ginger-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },

  title: {
    fontSize: 25,
    lineHeight: 30,
    fontFamily: 'F37Ginger-Bold',
    paddingHorizontal,
  },
  color: {
    color: '#2CFEFA',
  },
  subscription: {
    fontSize: 14,
    fontFamily: 'F37Ginger',
    letterSpacing: -0.3,
  },

  gradient: {
    marginTop: 17,
    height: 1,
  },
});

export { paddingTop };
