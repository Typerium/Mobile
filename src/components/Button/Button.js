// @flow

import React from 'react';
import {
  TouchableOpacity, View, Text as TextType,
} from 'react-native';

import { Text } from 'components';
import styles from './styles';

type Props = {
  onPress: () => void,
  isActive?: boolean,
  text?: string,
  // style props
  style?: View.propTypes.style,
  styleDeactivate?: View.propTypes.style,
  textStyle?: TextType.propTypes.style,
  second?: boolean,
  res: View.propTypes,
}

const Button = ({
  onPress, text, isActive, style, styleDeactivate,
  textStyle, second, ...res
}: Props) => {
  let backgroundColor = isActive ? 'rgba(44, 254, 250, 1)' : 'rgba(44, 254, 250, 0.5)';
  if (second) backgroundColor = '#15171E';
  return (
  // $FlowFixMe
    <TouchableOpacity
      style={[
        { backgroundColor },
        styles.button,
        style,
        isActive ? {} : styleDeactivate,
      ]}
      onPress={isActive ? onPress : () => {}}
      activeOpacity={+!isActive || 0.2}
      {...res}
    >
      <Text style={[
        styles.text,
        textStyle,
        second ? styles.textSecond : {},
      ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  isActive: true,
  text: '',
  second: false,
  // style props
  style: {},
  styleDeactivate: {},
  textStyle: {},
};

export default Button;
