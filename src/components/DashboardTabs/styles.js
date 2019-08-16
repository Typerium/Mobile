import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    width: '100%',
    backgroundColor: '#15171E',
    overflow: 'visible',
  },
  gradient: {
    top: 1,
    position: 'absolute',
    width: '100%',
    height: 1,
  },
  iconContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  iconTouch: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
    width: 75,
    height: 75,
    backgroundColor: '#15171E',
    borderWidth: 2,
    borderColor: '#00FFF9',
    borderRadius: 50,
  },
});
