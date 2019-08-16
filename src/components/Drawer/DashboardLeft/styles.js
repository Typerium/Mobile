import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
  gradient: {
    borderRightWidth: 2,
    height: '100%',
    width: '75%',
    maxWidth: 280,
    backgroundColor: 'grey',
  },
  draw: {
    height: '100%',
    width: '100%',
    backgroundColor: '#15171E',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  closeTouch: {
    padding: 20,
    paddingLeft: 0,
  },

  empty: {
    width: '200%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
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
    alignItems: 'flex-start',
  },
  liContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  liText: {
    fontSize: 16,
    paddingLeft: 20,
    letterSpacing: 1,
  },

  logout: {
    minHeight: 40,
    flex: 1,
    justifyContent: 'center',
  },


});
