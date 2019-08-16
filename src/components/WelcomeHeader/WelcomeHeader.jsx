// @flow

import React from 'react';
import {
  TouchableOpacity, View,
} from 'react-native';

import { NavigationService } from '~/navigation';
import { ArrowLeft } from '~/assets/image';
import { Text } from '~/components';
import styles from './styles';

type Props = {
  title?: string,
  noBackIcon?: boolean,
  backToTop?: boolean,
  style?: View.propTypes.style,
}

const WelcomeHeader = ({
  title,
  noBackIcon,
  backToTop,
  style,
}: Props) => {
  const handleBack = backToTop ? NavigationService.popToTop : NavigationService.pop;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.touchBack}
        onPress={noBackIcon ? () => {} : handleBack}
      >
        {noBackIcon
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
};

WelcomeHeader.defaultProps = {
  title: '',
  noBackIcon: false,
  backToTop: false,
  style: {},
};

export default WelcomeHeader;
