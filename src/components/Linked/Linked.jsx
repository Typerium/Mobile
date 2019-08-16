// @flow

import React from 'react';
import {
  TouchableOpacity, View,
} from 'react-native';

import { Text } from '~/components';
import styles from './styles';

type Props = {
  onPress: () => void,
  text?: string,
  style?: View.propTypes.style,
  styleText?: View.propTypes.style,
}

const Linked = ({
  onPress, text, style, styleText,
}: Props) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
    ]}
    onPress={onPress}
  >
    <Text style={[styles.text, styleText]}>
      {text}
    </Text>
  </TouchableOpacity>
);

Linked.defaultProps = {
  text: '',
  style: {},
  styleText: {},
};

export default Linked;
