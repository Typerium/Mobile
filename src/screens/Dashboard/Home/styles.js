import { StyleSheet } from 'react-native';
import { fitScreenSize } from '~/utils/platform';

const paddingHorizontal = fitScreenSize(29);
const paddingLeft = fitScreenSize(59);

export default StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '100%',
    backgroundColor: '#15171E',
  },

  header: {
    height: 64,
    backgroundColor: '#15171E',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    paddingLeft,
    paddingRight: 55,
    paddingTop: 15,
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
    right: paddingHorizontal,
    top: 6,
    padding: 20,
    paddingLeft: 10,
  },
  search: {
    position: 'absolute',
    right: paddingHorizontal,
    top: 6,
    padding: 20,
    paddingRight: 10,
  },
  searchOpen: {
    right: '100%',
    left: paddingLeft - 5,
    paddingRight: 0,
  },

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 13,
    paddingRight: 25,
  },
  filterText: {
    fontFamily: 'F37Ginger-Bold',
    fontSize: 14,
    paddingRight: 8,
  },

  listMenu: {
    position: 'absolute',
    top: 64,
    width: 50,
    height: '100%',
  },

  listMenuContent: {
    paddingBottom: 139, // top element + height tabs
  },
});
