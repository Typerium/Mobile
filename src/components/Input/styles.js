import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // left: fix because margin = 1
    left: -1,
    width: '100%',
  },
  borderGradient: {
    borderRadius: 8,
  },
  labelSecondContainer: {
    position: 'absolute',
    top: -4,
    left: 18,
    paddingHorizontal: 3,
  },
  labelSecond: {
    fontSize: 9,
    lineHeight: 9,
  },
  input: {
    height: 48,
    color: '#FFFFFF',
    fontSize: 16,
    margin: 1,
    paddingTop: 15,
    paddingLeft: 14,
    paddingBottom: 13,
    borderRadius: 8,
    fontFamily: 'F37 Ginger',
  },
  iconContainer: {
    position: 'absolute',
    top: 4,
    right: -2,
    padding: 20,
  },
  error: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FB7171',
    paddingTop: 8,
    paddingLeft: 14,
  },
});
