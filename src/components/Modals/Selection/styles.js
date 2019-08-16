import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  header: {
    height: 64,
    backgroundColor: '#15171E',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: 1,
  },
  dragRect: {
    width: 36,
    height: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    borderRadius: 2,
    margin: 9,
  },
  searchContainer: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 55,
  },
  input: {
    height: 39,
    color: '#FFFFFF',
    fontSize: 12,
    margin: 1,
    paddingTop: 15,
    paddingLeft: 38,
    paddingBottom: 13,
    borderRadius: 8,
    fontFamily: 'F37 Ginger',
    backgroundColor: '#15171E',
  },
  borderGradient: {
    borderRadius: 8,
  },
  close: {
    position: 'absolute',
    right: 12,
    top: 16,
    padding: 20,
    paddingLeft: 10,
  },
  search: {
    position: 'absolute',
    right: 56,
    top: 16,
    padding: 20,
    paddingRight: 10,
  },
  searchOpen: {
    right: '100%',
    left: 21,
    paddingRight: 0,
  },

  list: {
    height: '100%',
    backgroundColor: '#15171E',
  },
  item: {
    paddingLeft: 34,
  },
  selectItem: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 20,
  },
  selectIcon: {
    position: 'absolute',
    top: 24,
    right: 37,
  },
  code: {
    color: '#2CFEFA',
  },
});
