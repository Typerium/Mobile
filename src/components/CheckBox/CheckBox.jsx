// @flow
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CheckEmpty, CheckFull } from '~/assets/image';
import { Text } from '~/components';
import styles from './styles';

type Props = {
  value?: boolean,
  text?: string,
  handle?: (boolean) => {},
  style?: View.propTypes.style,
  children?: any,
}

// eslint-disable-next-line
const CheckBox = ({value, handle, text, children, style}: Props) => {
  const handleCheckbox = () => handle && handle(!value);
  return (
    <TouchableOpacity
      onPress={handleCheckbox}
      style={[styles.touchContainer, style]}
    >
      <View
        style={[styles.container, { opacity: value ? 1 : 0.5 }]}
      >
        {value
          ? <CheckFull />
          : <CheckEmpty />
        }
        <Text style={styles.text}>
          {text}
        </Text>

      </View>
      {children}
    </TouchableOpacity>
  );
};

CheckBox.defaultProps = {
  value: false,
  handle: () => {},
  text: '',
  style: {},
  children: null,
};

export default CheckBox;
