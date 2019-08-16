// @flow
import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components';
import {
  passwordShortLength, isLowerCase, isUpperCase, isSpecialChar,
} from '~/utils/validation';
import styles from './styles';

type Props = {
  password: string,
}

// eslint-disable-next-line
const PasswordStrength = ({password}: Props) => {
  let textStrength = ' Weak';
  let color = '#FB7171';
  let width = '30%';

  if (!passwordShortLength(password)) {
    color = '#FBED71';
    width = '60%';
    textStrength = ' Medium';
  }
  if (!passwordShortLength(password)
  && (!isLowerCase(password) && !isUpperCase(password))
  && isSpecialChar(password)
  ) {
    color = '#6EFF8E';
    width = '100%';
    textStrength = ' Strong';
  }
  return (
    <View style={[styles.container, { opacity: +!!password }]}>
      <Text style={styles.text}>
        password strength:
        <Text style={[styles.text, styles.textColor, { color }]}>{textStrength}</Text>
      </Text>
      <View style={styles.lineContainer}>
        <View style={[styles.line, { backgroundColor: color, width }]} />
      </View>
    </View>
  );
};

export default PasswordStrength;
