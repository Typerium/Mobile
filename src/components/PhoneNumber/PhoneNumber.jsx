// @flow

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneNumberUtil } from 'google-libphonenumber';

import { Correct, IncorrectIcon } from '~/assets/image';
import { Text } from '~/components';
import styles from './styles';

const phoneUtil = PhoneNumberUtil.getInstance();

type Props = {
  code?: string,
  codeCountry?: string,
  number?: string,
  label?: string,
  labelSecond?: string,
  isDisabled?: boolean,
  correctCode?: boolean,
  error?: string,
  onHandleCode?: () => {},
  onChangeNumber?: (string) => {},
  style: TextInput.propTypes.style,
}

const Input = ({
  code, number, label, labelSecond, isDisabled, onHandleCode,
  onChangeNumber, style, correctCode, error, codeCountry,
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  let numberInput = number;
  let correct = false;

  if (number && number.length > 2 && codeCountry) {
    try {
      const phone = phoneUtil.parseAndKeepRawInput(number, codeCountry);
      numberInput = phoneUtil.formatInOriginalFormat(phone, codeCountry);
      correct = phoneUtil.isValidNumber(phone);
    } catch (e) {
      numberInput = number;
      correct = false;
    }
  }

  const firstBorderColor = `rgba(255,255,255,${(isFocused || code) ? 0.5 : 0})`;
  const colorCode = correctCode ? '#2CFEFA' : '#FFFFFF';
  const colorSeparate = code ? '#FFFFFF' : 'rgba(255,255,255,0.5)';
  const color = correct ? '#2CFEFA' : '#FFFFFF';
  const opacityLabel = code ? 1 : 0;
  let backgroundColor = isFocused ? 'rgb(31, 33, 40)' : 'rgb(41, 43, 50)';
  if (code && !isFocused) backgroundColor = '#15171E';

  const handlePressIcon = () => {
    if (error && onHandleCode) onHandleCode();
  };

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[firstBorderColor, 'rgba(0,0,0,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.borderGradient}
      >
        <TouchableOpacity
          onPress={onHandleCode}
        >
          <TextInput
            pointerEvents="none"
            value={code}
            style={[styles.input, styles.inputCode, { backgroundColor, color: colorCode }]}
            placeholder="+"
            placeholderTextColor="rgba(255,255,255,0.5)"
            editable={false}
          />
        </TouchableOpacity>
        <Text style={[styles.inputSeparation, { backgroundColor, color: colorSeparate }]}>|</Text>

        <TextInput
          value={numberInput}
          onChangeText={onChangeNumber}
          style={[styles.input, { backgroundColor, color }]}
          placeholder={label}
          placeholderTextColor="rgba(255,255,255,0.5)"
          editable={!isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          // $FlowFixMe
          maxLength={correct ? numberInput.length : 20}
          keyboardType="phone-pad"
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
  code: '',
  codeCountry: '',
  number: '',
  label: '',
  labelSecond: '',
  isDisabled: false,
  correctCode: false,
  error: null,
  onHandleCode: () => {},
  onChangeNumber: () => {},
};

export default Input;
