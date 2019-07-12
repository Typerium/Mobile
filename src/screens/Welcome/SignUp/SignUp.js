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
} from 'components';
import { fitScreenSize } from 'utils/platform';
import { authSaga } from 'store/app/actions';
import styles from './styles';

const paddingHorizontal = fitScreenSize(32);

type Props = {
  auth: ({email: string, password: string}) => {}
}

const SignUp = ({ auth }: Props) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [rePassword, setRePassword] = useState('');
  const [isReSecure, setReSecure] = useState(true);
  const [agreePP, setAgreePP] = useState(false);

  const handleSignUp = () => auth({ email, password });

  return (
    <Wrapper style={styles.container}>
      <View style={{ paddingHorizontal, width: '100%' }}>
        <WelcomeSubtitle style={styles.subtitle}>
          Create new account or sign up using
          social media
        </WelcomeSubtitle>
      </View>
      <WrapperScroll>
        <Input
          value={userName}
          onChangeText={setUserName}
          label="Username"
          labelSecond="NAME"
          correct={userName.length > 5}
          correctHideIcon
          error={userName.length === 5 ? 'Error 1' : ''}
          style={styles.input}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          label="E-mail or username"
          labelSecond="EMAIL or USERNAME"
          correct={false}
          correctHideIcon
          error={email.length === 2 ? 'Error 2 ' : ''}
          style={styles.input}
        />
        <PhoneNumber
          number={phone}
          code={phoneCode}
          onChangeNumber={setPhone}
          onChangeCode={setPhoneCode}
          label="Mobile number"
          labelSecond="MOBILE NUMBER"
          correct={false}
          correctHideIcon
          error={email.length === 5 ? 'Error 3' : ''}
          style={styles.input}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          label="Password"
          labelSecond="PASSWORD"
          correct={password.length > 5}
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
          correct={rePassword.length > 5}
          error=""
          isSecure={isReSecure}
          isSecureText
          handleSecure={setReSecure}
          style={styles.input}
        />

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
          isActive
        />
        <Button
          text="LOG IN"
          onPress={handleSignUp}
          isActive
          second
        />
      </WrapperScroll>
    </Wrapper>
  );
};

export default connect(
  null,
  {
    auth: authSaga,
  },
)(SignUp);
