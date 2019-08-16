/* eslint-disable import/prefer-default-export */
import { PermissionsAndroid, Platform } from 'react-native';

export const checkAndroidPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    }
  } catch (error) {
    Promise.reject(error);
  }
};
