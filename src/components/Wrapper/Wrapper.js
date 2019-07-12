// @flow

import * as React from 'react';
import {
  KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import { fitScreenSize } from 'utils/platform';
import styles from './styles';

const PADDING_HORIZONTAL = fitScreenSize(32);

type Props = {
  children: React.Node,
  style?: ViewStyleProp,
  containerStyle?: ViewStyleProp,
  offset?: number,
  padding?: boolean,
}

const Wrapper = ({
  children, style, offset, containerStyle, padding,
}: Props) => {
  const paddingHorizontal = padding ? PADDING_HORIZONTAL : 0;
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <KeyboardAvoidingView
        style={[
          { paddingHorizontal },
          styles.childContainer,
          styles.wrapper,
          style,
        ]}
        enabled
        {...Platform.select({
          ios: {
            behavior: 'padding',
            keyboardVerticalOffset: offset,
          },
        })}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

Wrapper.defaultProps = {
  style: {},
  containerStyle: {},
  offset: 0,
  padding: false,
};

export default Wrapper;
