import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
  },
  gradient: {
    borderLeftWidth: 2,
    height: '100%',
    width: '75%',
    maxWidth: 280,
    backgroundColor: 'grey',
  },
  draw: {
    height: '100%',
    width: '100%',
    backgroundColor: '#15171E',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  closeTouch: {
    padding: 20,
    paddingRight: 0,
  },

  empty: {
    width: '200%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  emptyTouch: {
    flex: 1,
    backgroundColor: 'rgba(21, 23, 30, 0.5)',
  },

  userContainer: {
    paddingTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 17,
    paddingLeft: 10,
    fontFamily: 'F37Ginger-Bold',
  },

  menu: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  liContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  liText: {
    fontSize: 16,
    paddingRight: 20,
    letterSpacing: 1,
  },

  space: { flex: 1 },
});
