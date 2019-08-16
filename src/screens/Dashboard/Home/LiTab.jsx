// @flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Text } from 'react-native-svg';
import { TriangleToRightIcon } from '~/assets/image';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default ({
  text, isSelect, handle,
}: any) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => handle(text)}
    disabled={isSelect}
  >
    <TriangleToRightIcon fillOpacity={+!!isSelect} />

    <Svg
      width={40}
      height={text.length * 8 + 20}
      fill="red"
      style={{
        alignItems: 'center',
      }}
    >
      <Text
        x="-10"
        y="20"
        textAnchor="end"
        transform="rotate(-90)"
        fill={isSelect ? '#2CFEFA' : '#FFFFFF'}
        fontWeight={isSelect ? 'bold' : 'normal'}
        fillOpacity={isSelect ? 1 : 0.5}
        fontSize={12}
      >
        {text}
      </Text>

    </Svg>
  </TouchableOpacity>
);
