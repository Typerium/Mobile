// @flow

import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  Wrapper,
  WrapperScroll,
  WelcomeSubtitle,
  Text,
  Input,
  PhoneNumber,
  CheckBox,
  Button,
  FacebookButton,
  Linked,
  PasswordStrength,
} from '~/components';
import { NavigationService, routes } from '~/navigation';
import { fitScreenSize } from '~/utils/platform';
import { validateEmail } from '~/utils/validation';
import { signUp } from '~/store/welcome/actions';
import { showPhoneCodes as showPhoneCodesAction } from '~/store/modals/actions';
import styles from './styles';

const paddingHorizontal = fitScreenSize(32);

type Props = {
  phoneCode: string,
  phoneCodeCountry: string,
  showPhoneCodes: (boolean, Function) => {},
  sign: ({email: string, password: string}) => {}
}

const SignUp = ({
  sign, showPhoneCodes, phoneCode, phoneCodeCountry,
}: Props) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [rePassword, setRePassword] = useState('');
  const [isReSecure, setReSecure] = useState(true);
  const [agreePP, setAgreePP] = useState(false);

  const changeEmail = text => setEmail(text.replace(' ', ''));
  const changeName = text => setUserName(text.replace(' ', ''));
  const changePassword = text => setPassword(text.replace(' ', ''));

  const nameIsCorrect = !!userName.length;
  const emailIsCorrect = validateEmail(email);
  const passwordIsCorrect = password.length > 5;
  const rePasswordIsCorrect = rePassword.length > 5;
  const rePasswordError = rePassword
    && rePasswordIsCorrect
    && (password !== rePassword) ? 'Passwords do not match' : false;
  const isActiveButton = nameIsCorrect && emailIsCorrect
    && passwordIsCorrect && rePasswordIsCorrect
    && agreePP && !rePasswordError;

  const handleSignUp = () => {
    sign({
      email,
      userName,
      phone: `${phoneCode}${phone}`,
      password,
    });
  };
  const handleSignIn = () => NavigationService.navigate(routes.Welcome.LogIn);
  const handlePhoneCode = () => {
    showPhoneCodes(true);
  };

  return (
    <Wrapper style={styles.container}>
      <View style={{ paddingHorizontal, width: '100%' }}>
        <WelcomeSubtitle style={styles.subtitle}>
          Create new account or sign up using
          social media
        </WelcomeSubtitle>
      </View>
      <WrapperScroll padding>
        <Input
          value={userName}
          onChangeText={changeName}
          label="Username"
          labelSecond="NAME"
          correct={nameIsCorrect}
          correctHideIcon
          // error={userName.length === 5 ? 'Error 1' : ''}
          style={styles.input}
        />
        <Input
          value={email}
          onChangeText={changeEmail}
          label="E-mail or username"
          labelSecond="EMAIL or USERNAME"
          correct={emailIsCorrect}
          correctHideIcon
          // error={email.length === 2 ? 'Error 2 ' : ''}
          style={styles.input}
        />
        <PhoneNumber
          number={phone}
          code={phoneCode}
          codeCountry={phoneCodeCountry}
          onChangeNumber={setPhone}
          onHandleCode={handlePhoneCode}
          label="Mobile number"
          labelSecond="MOBILE NUMBER"
          correctHideIcon
          // error={email.length === 5 ? 'Error 3' : ''}
          style={styles.input}
        />
        <Input
          value={password}
          onChangeText={changePassword}
          label="Password"
          labelSecond="PASSWORD"
          correct={passwordIsCorrect}
          error=""
          isSecure={isSecure}
          isSecureText
          handleSecure={setSecure}
          style={styles.input}
        />
        <Input
          value={rePassword}
          onChangeText={setRePassword}
          label="Re-type password"
          labelSecond="RE-TYPE PASSWORD"
          correct={rePasswordIsCorrect}
          error={rePasswordError}
          isSecure={isReSecure}
          isSecureText
          handleSecure={setReSecure}
          style={styles.input}
        />

        <PasswordStrength password={password} />

        <FacebookButton style={styles.fb} />

        <View style={styles.underInput}>
          <CheckBox
            value={agreePP}
            handle={setAgreePP}
            style={styles.agreePPContainer}
          >
            <View style={styles.agreePPTextContainer}>
              <Text style={styles.agreePPText}>By signing up, you agree to</Text>
              <Linked
                text="Terms & Conditions"
                onPress={() => {}}
                styleText={styles.agreePPText}
              />
              <Text style={styles.agreePPText}> and </Text>
              <Linked
                text="Privacy Policy"
                onPress={() => {}}
                styleText={styles.agreePPText}
              />
            </View>
          </CheckBox>
        </View>

        <View style={styles.emptySpace} />

        <Button
          text="SIGN UP"
          onPress={handleSignUp}
          isActive={isActiveButton}
        />
        <Button
          text="LOG IN"
          onPress={handleSignIn}
          isActive
          second
        />
      </WrapperScroll>
    </Wrapper>
  );
};

export default connect(state => ({
  phoneCode: state.modals.phoneCode,
  phoneCodeCountry: state.modals.phoneCodeCountry,
}),
{
  sign: signUp,
  showPhoneCodes: showPhoneCodesAction,
})(SignUp);
