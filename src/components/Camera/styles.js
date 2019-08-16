import { StyleSheet } from 'react-native';

import { fitScreenSize, isIphoneX, isAndroid } from '~/utils/platform';


const paddingHorizontal = fitScreenSize(32);
let paddingTop = isIphoneX ? 44 : 30;
if (isAndroid) paddingTop = 10;

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#15171E',
    paddingTop,
    paddingHorizontal,
  },
  touchBack: {
    height: 17,
    marginTop: 10,
    marginBottom: fitScreenSize(28),
  },
  preview: {
    width: '100%',
    height: '50%',
    alignItems: 'flex-end',
    marginBottom: paddingTop,
  },
});
