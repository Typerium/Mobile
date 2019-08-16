// @flow

import * as React from 'react';
import {
  ScrollView, Dimensions,
} from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import { fitScreenSize } from '~/utils/platform';
import styles from './styles';

const HEIGHT: number = Dimensions.get('window').height;
const MARGIN_HORIZONTAL = fitScreenSize(32);

type Props = {
  children: React.Node,
  style?: ViewStyleProp,
  styleContent?: ViewStyleProp,
  padding?: boolean,
}

const WrapperScroll = ({
  children, style, styleContent, padding,
}: Props) => {
  const [bounces, setBounces] = React.useState(true);
  const marginHorizontal = padding ? MARGIN_HORIZONTAL : 0;
  return (
    <ScrollView
      onContentSizeChange={(width, height) => {
        if (HEIGHT > (height) && bounces) setBounces(false);
      }}
      style={[styles.scroll, style]}
      contentContainerStyle={[
        styles.scrollContent,
        { flex: +!!bounces, marginHorizontal },
        styleContent,
      ]}
      scrollEnabled
      bounces={bounces}
    >
      {children}
    </ScrollView>
  );
};

WrapperScroll.defaultProps = {
  style: {},
  styleContent: {},
  padding: false,
};

export default WrapperScroll;
