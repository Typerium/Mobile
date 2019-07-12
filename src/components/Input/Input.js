// @flow

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ShowIcon, Correct, IncorrectIcon } from 'assets/image';
import { Text } from 'components';
import styles from './styles';

type Props = {
  value?: string,
  label?: string,
  labelSecond?: string,
  isSecure?: boolean,
  isSecureText?: boolean,
  isDisabled?: boolean,
  correct?: boolean,
  correctHideIcon?: boolean,
  error?: string,
  onChangeText?: (string) => {},
  handleSecure?: (boolean) => {},
  res: TextInput.propTypes,
  style: TextInput.propTypes.style,
}

const Input = ({
  value, label, labelSecond, isDisabled, onChangeText, style,
  isSecure, isSecureText, correct, correctHideIcon, error, handleSecure, ...res
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  const handlePressIcon = () => {
    if (handleSecure) handleSecure(!isSecure);
    if (error && onChangeText) onChangeText('');
  };
  const firstBorderColor = `rgba(255,255,255,${(isFocused || value) ? 0.5 : 0})`;
  const color = correct ? '#2CFEFA' : '#FFFFFF';
  const opacityLabel = value ? 1 : 0;
  let backgroundColor = isFocused ? 'rgb(31, 33, 40)' : 'rgb(41, 43, 50)';
  if (value && !isFocused) backgroundColor = '#15171E';

  return (
    <View style={[styles.container, style]}>
      {/* $FlowFixMe */}
      <LinearGradient
        colors={[firstBorderColor, 'rgba(0,0,0,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.borderGradient}
      >
        {/* $FlowFixMe */}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, { backgroundColor, color }]}
          placeholder={label}
          placeholderTextColor="rgba(255,255,255,0.5)"
          editable={!isDisabled}
          secureTextEntry={isSecure}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...res}
        />
      </LinearGradient>
      {/* icons */}
      <TouchableOpacity style={styles.iconContainer} onPress={handlePressIcon}>
        {isSecureText ? <ShowIcon height={11} width={17} style={{ opacity: 0.8 }} /> : null }
        {correct && !isSecureText && !correctHideIcon ? <Correct height={13} width={18} /> : null }
        {error ? <IncorrectIcon height={13} width={13} /> : null }
      </TouchableOpacity>
      {/* top label */}
      {/* // $FlowFixMe */}
      <LinearGradient
        colors={['#15171E', 'rgb(41, 43, 50)']}
        style={[styles.labelSecondContainer, { opacity: opacityLabel }]}
      >
        <Text style={styles.labelSecond}>
          {labelSecond || label}
        </Text>
      </LinearGradient>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

Input.defaultProps = {
  value: '',
  label: '',
  labelSecond: '',
  isSecure: false,
  isSecureText: false,
  isDisabled: false,
  correct: false,
  correctHideIcon: false,
  error: null,
  onChangeText: () => {},
  handleSecure: () => {},
};

export default Input;
