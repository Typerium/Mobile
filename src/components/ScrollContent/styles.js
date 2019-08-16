import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT_IMAGE = (Dimensions.get('screen').width - 55 - 23 - 15) / 2;

export default StyleSheet.create({
  flatlist: {
    marginLeft: 55,
    paddingRight: 23,
    width: 'auto',
    minHeight: '100%',
  },
  flatItem: {
    margin: 5,
    height: HEIGHT_IMAGE,
    width: HEIGHT_IMAGE - 5,
  },
  element: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    borderRadius: 3,
  },
  flatlistContent: {
    paddingBottom: 145 + 75,
  },
});

export const flatItemImage = (vertical, horizontal, height, empty) => StyleSheet.create({
  style: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height || HEIGHT_IMAGE * (vertical ? 2 : 1) + (vertical ? 10 : 0),
    width: empty ? 1 : HEIGHT_IMAGE * (horizontal ? 2 : 1) + (horizontal ? 5 : 0),
    borderRadius: 3,
    margin: 5,
  },
});
