// @flow
import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components';
import styles from './styles';

type Props = {
  style?: View.propTypes.style,
  styleText?: View.propTypes.style,
  children?: string,
}

const WelcomeHeader = ({
  style,
  styleText,
  children,
}: Props) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.text, styleText]}>
      {children}
    </Text>
  </View>
);

WelcomeHeader.defaultProps = {
  style: {},
  styleText: {},
  children: '',
};

export default WelcomeHeader;
