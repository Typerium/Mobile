/* eslint-disable import/prefer-default-export */
// @flow
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

// 375
export const fitScreenSize = (value: number, coefficient: number = 1) => {
  if (width >= 375) return value;
  return Math.round((width + 100) * coefficient / 514 * value);
};

export const isIphoneX = (() => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
      && !Platform.isPad
      && !Platform.isTVOS
      && ((
        dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896
      ))
  );
})();

export const isAndroid = Platform.OS === 'android';

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX) {
    return iphoneXStyle;
  }
  return regularStyle;
}
