// @flow
import React from 'react';
import { View } from 'react-native';

import { Text } from 'components';
import styles from './styles';

type Props = {
  style?: View.propTypes.style,
  children?: string,
}

const WelcomeHeader = ({
  style,
  children,
}: Props) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>
      {children}
    </Text>
  </View>
);

WelcomeHeader.defaultProps = {
  style: {},
  children: '',
};

export default WelcomeHeader;
