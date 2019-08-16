import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 8,
    padding: 14,
  },
  text: {
    fontSize: 12,
  },
  textColor: {
    color: '#FB7171',
    fontFamily: 'F37Ginger-Bold',
  },
  lineContainer: {
    width: 90,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  line: {
    width: '30%',
    height: 4,
    backgroundColor: '#FB7171',
  },
});
