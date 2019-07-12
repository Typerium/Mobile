import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(21, 23, 30, 0.5)',
  },
  gradient: {
    borderTopWidth: 1,
    width: '100%',
  },
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
    width: '100%',
    marginVertical: 1,
    paddingHorizontal: 32,
    backgroundColor: '#202229',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 25,
    marginRight: 25,
    borderRightColor: 'rgba(255,255,255,0.7)',
    borderRightWidth: 1,
  },
  title: {
    fontSize: 16,
    color: '#FB7171',
    fontFamily: 'F37Ginger-Bold',
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
  },
});
