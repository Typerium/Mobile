// @flow

import React from 'react';
import {
  TouchableOpacity, View,
} from 'react-native';

import { NavigationService } from 'navigation';
import { ArrowLeft } from 'assets/image';
import { Text } from 'components';
import styles from './styles';

type Props = {
  title?: string,
  firstScreen?: boolean,
  style?: View.propTypes.style,
}

const WelcomeHeader = ({
  title,
  firstScreen,
  style,
}: Props) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity
      style={styles.touchBack}
      onPress={NavigationService.pop}
    >
      {firstScreen
        ? null
        : <ArrowLeft />
        }
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{`${title ? title.split(' ')[0] : ''} `}</Text>
      <Text style={[styles.title, styles.titleColor]}>{`${title ? title.split(' ')[1] : ''}`}</Text>
    </View>
  </View>
);

WelcomeHeader.defaultProps = {
  title: '',
  firstScreen: false,
  style: {},
};

export default WelcomeHeader;
