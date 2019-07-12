import { StyleSheet } from 'react-native';
import { fitScreenSize } from 'utils/platform';

export default StyleSheet.create({
  subtitle: {
    marginBottom: fitScreenSize(25),
  },
  photo: {
    marginBottom: fitScreenSize(20),
  },
  input: {
    marginTop: fitScreenSize(10),
  },
  underInput: {
    width: '100%',
    height: fitScreenSize(60),
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  fb: {
    marginTop: 20,
  },
  emptySpace: {
    flex: 1,
  },
});
