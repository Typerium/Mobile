// @flow

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Correct, IncorrectIcon } from 'assets/image';
import { Text } from 'components';
import styles from './styles';

type Props = {
  code?: string,
  number?: string,
  label?: string,
  labelSecond?: string,
  isDisabled?: boolean,
  correct?: boolean,
  correctCode?: boolean,
  error?: string,
  onChangeCode?: (string) => {},
  onChangeNumber?: (string) => {},
  style: TextInput.propTypes.style,
}

const Input = ({
  code, number, label, labelSecond, isDisabled, onChangeCode,
  onChangeNumber, style, correct, correctCode, error,
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  const handlePressIcon = () => {
    if (error && onChangeCode) onChangeCode('');
  };
  const firstBorderColor = `rgba(255,255,255,${(isFocused || code) ? 0.5 : 0})`;
  const colorCode = correctCode ? '#2CFEFA' : '#FFFFFF';
  const colorSeparate = code ? '#FFFFFF' : 'rgba(255,255,255,0.5)';
  const color = correct ? '#2CFEFA' : '#FFFFFF';
  const opacityLabel = code ? 1 : 0;
  let backgroundColor = isFocused ? 'rgb(31, 33, 40)' : 'rgb(41, 43, 50)';
  if (code && !isFocused) backgroundColor = '#15171E';

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[firstBorderColor, 'rgba(0,0,0,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.borderGradient}
      >
        <TextInput
          value={code}
          onChangeText={onChangeCode}
          style={[styles.input, styles.inputCode, { backgroundColor, color: colorCode }]}
          // placeholder={label}
          placeholder="+"
          placeholderTextColor="rgba(255,255,255,0.5)"
          editable={!isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Text style={[styles.inputSeparation, { backgroundColor, color: colorSeparate }]}>|</Text>

        <TextInput
          value={number}
          onChangeText={onChangeNumber}
          style={[styles.input, { backgroundColor, color }]}
          placeholder={label}
          placeholderTextColor="rgba(255,255,255,0.5)"
          editable={!isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </LinearGradient>
      {/* icons */}
      <TouchableOpacity style={styles.iconContainer} onPress={handlePressIcon}>
        {correct ? <Correct height={13} width={18} /> : null }
        {error ? <IncorrectIcon height={13} width={13} /> : null }
      </TouchableOpacity>
      {/* top label */}
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
  code: '+123',
  number: '45678910',
  label: '',
  labelSecond: '',
  isDisabled: false,
  correct: false,
  correctCode: false,
  error: null,
  onChangeCode: () => {},
  onChangeNumber: () => {},
};

export default Input;
