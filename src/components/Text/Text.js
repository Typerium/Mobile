// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';

type Props = {
  style: Text.propTypes.style,
  children: string,
  allowFontScaling?: boolean,
  rest: Text.propTypes
}

const styles = ({
  text: {
    fontSize: 14,
    fontFamily: 'F37Ginger',
    color: '#FFFFFF',
    lineHeight: 18,
  },
});

// eslint-disable-next-line
export default class AppText extends Component<Props> {
  static defaultProps = {
    allowFontScaling: false,
  };

  render() {
    const { style, children, ...rest } = this.props;
    return (
      // $FlowFixMe
      <Text allowFontScaling={false} {...rest} style={[styles.text, style]}>
        {children}
      </Text>
    );
  }
}
