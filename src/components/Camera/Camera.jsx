// @flow
import React, {
  useState, useContext, useEffect,
} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationContext } from 'react-navigation';

import { NavigationService } from '~/navigation';
import { ArrowLeft } from '~/assets/image';
import styles from './styles';


export default () => {
  const navigation = useContext(NavigationContext);
  const [mount, changeMount] = useState(false);
  const isFocused = navigation.isFocused();

  function handleEvt() {
    changeMount(false);
  }

  useEffect(
    () => {
      changeMount(true);
      const subsWB = navigation.addListener('willBlur', handleEvt);
      return () => subsWB.remove();
    }, [],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchBack}
        onPress={NavigationService.pop}
      >
        <ArrowLeft />
      </TouchableOpacity>
      {mount && isFocused
        && (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        )}

    </View>
  );
};
