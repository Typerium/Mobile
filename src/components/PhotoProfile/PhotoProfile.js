// @flow

import React from 'react';
import {
  Image, View,
} from 'react-native';

import { Text } from 'components';
import styles from './styles';

type Props = {
  uri?: any,
  text?: string,
  style?: View.propTypes.style
}

const PhotoProfile = ({
  uri, text, style,
}: Props) => (
  <View style={[styles.container, style]}>
    <View style={styles.photoContainer}>
      {uri && (
      <Image
        // source={{ uri: profileImg }}
        source={uri} // FIXME: fake
        style={styles.photo}
      />
      )}
    </View>
    <Text style={[styles.text, styles.textColor]}>
      { text ? `${text.split(' ').slice(0, 1).join()} ` : '' }
    </Text>
    <Text style={styles.text}>
      { text ? text.split(' ').slice(1).join(' ') : '' }
    </Text>
  </View>
);

PhotoProfile.defaultProps = {
  uri: null,
  text: '',
  style: {},
};

export default PhotoProfile;
