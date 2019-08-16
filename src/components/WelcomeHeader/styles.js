import { StyleSheet } from 'react-native';

import { fitScreenSize, isIphoneX, isAndroid } from '~/utils/platform';

const paddingHorizontal = fitScreenSize(32);
let paddingTop = isIphoneX ? 44 : 30;
if (isAndroid) paddingTop = 10;

export default StyleSheet.create({
  container: {
    paddingTop,
    paddingHorizontal,
    width: '100%',
    backgroundColor: '#15171E',
  },
  title: {
    fontFamily: 'F37Ginger-Bold',
    fontSize: 26,
    lineHeight: 31,
  },
  titleColor: {
    color: '#2CFEFA',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  touchBack: {
    height: 17,
    marginTop: 10,
    marginBottom: fitScreenSize(28),
  },
});
