import { StyleSheet } from 'react-native';

import { fitScreenSize } from '~/utils/platform';

export default StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    height: fitScreenSize(48),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 50,
  },
  emptySpace: {
    flex: 1,
  },
  text: {
    paddingTop: 2,
    fontSize: fitScreenSize(16),
    color: '#FFFFFF',
    fontWeight: '100',
  },
  textBold: {
    paddingTop: 2,
    fontSize: fitScreenSize(16),
    color: '#FFFFFF',
    fontFamily: 'F37Ginger-Bold',
  },

  fb: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.02,
    zIndex: 1000,
  },
});
