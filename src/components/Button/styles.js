import { StyleSheet } from 'react-native';

import { fitScreenSize } from 'utils/platform';

export default StyleSheet.create({
  button: {
    width: '80%',
    borderRadius: 10,
    height: fitScreenSize(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fitScreenSize(16),
    fontFamily: 'F37Ginger-Bold',
    color: '#15171E',
  },
  textSecond: {
    fontSize: 13,
    color: '#2CFEFA',
  },
});
