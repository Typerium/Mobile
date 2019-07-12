import { StyleSheet } from 'react-native';

import { fitScreenSize } from 'utils/platform';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photoContainer: {
    height: fitScreenSize(98),
    width: fitScreenSize(98),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    borderColor: '#2CFEFA',
    borderWidth: 2,
    marginRight: 18,
  },
  photo: {
    height: fitScreenSize(72),
    width: fitScreenSize(72),
    borderRadius: 36,
  },
  text: {
    fontFamily: 'F37Ginger-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  textColor: {
    color: '#2CFEFA',
  },
});
