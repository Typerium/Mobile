// @flow

import * as React from 'react';
import {
  ScrollView, Dimensions,
} from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import { fitScreenSize } from 'utils/platform';
import styles from './styles';

const HEIGHT = Dimensions.get('window').height;
const marginHorizontal = fitScreenSize(32);

type Props = {
  children: React.Node,
  style?: ViewStyleProp,
}

const WrapperScroll = ({
  children, style,
}: Props) => {
  const [bounces, setBounces] = React.useState(true);
  return (
    <ScrollView
      onContentSizeChange={(width, height) => {
        if (HEIGHT > (height) && bounces) setBounces(false);
      }}
      style={[styles.scroll, style]}
      contentContainerStyle={[styles.scrollContent, { flex: +!!bounces, marginHorizontal }]}
      scrollEnabled
      bounces={bounces}
    >
      {children}
    </ScrollView>
  );
};

WrapperScroll.defaultProps = {
  style: {},
};

export default WrapperScroll;
