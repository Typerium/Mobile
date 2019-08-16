import { StyleSheet } from 'react-native';

import { fitScreenSize } from '~/utils/platform';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 260, // FIXME: from figma, need test android
    paddingTop: fitScreenSize(35),
  },
});
