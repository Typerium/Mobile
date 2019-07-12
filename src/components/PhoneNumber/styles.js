import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // left: fix because margin = 1
    left: -1,
    width: '100%',
  },
  borderGradient: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
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
    flex: 1,
    height: 48,
    color: '#FFFFFF',
    fontSize: 16,
    margin: 1,
    marginLeft: 0,
    paddingTop: 15,
    paddingLeft: 14,
    paddingBottom: 13,
    borderRadius: 8,
    fontFamily: 'F37 Ginger',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  inputCode: {
    height: 48,
    color: '#2CFEFA',
    maxWidth: 70,
    marginLeft: 1,
    marginRight: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputSeparation: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 1,
    paddingTop: 18,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
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
