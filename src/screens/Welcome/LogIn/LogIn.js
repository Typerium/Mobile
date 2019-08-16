// @flow

import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  Wrapper,
  WelcomeSubtitle,
  Input,
  CheckBox,
  Button,
  FacebookButton,
  Linked,
} from '~/components';
import { NavigationService, routes } from '~/navigation';
import { signIn } from '~/store/welcome/actions';
import { validateEmail } from '~/utils/validation';
import styles from './styles';

type Props = {
  auth: ({login: string, password: string}) => {}
}

const LogIn = ({ auth }: Props) => {
  const [login, setLogin] = useState('example@sfxdx.com');
  const [password, setPassword] = useState('sfxdx.com');
  const [isSecure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  const handleLogIn = () => auth({ login, password, remember });

  const loginIsCorrect = validateEmail(login);
  const passwordIsCorrect = password.length > 8;

  const changePassword = text => setPassword(text.replace(' ', ''));
  const changeLogin = text => setLogin(text.replace(' ', ''));

  return (
    <Wrapper style={styles.container} padding>
      <WelcomeSubtitle style={styles.subtitle}>
        Log in with your e-mail or continue with
        social media.
      </WelcomeSubtitle>

      <Input
        value={login}
        onChangeText={changeLogin}
        label="E-mail or username"
        labelSecond="EMAIL or USERNAME"
        correct={loginIsCorrect}
        // error={login.length === 2 ? 'Error' : ''}
        style={styles.input}
      />
      <Input
        value={password}
        onChangeText={changePassword}
        label="Password"
        labelSecond="PASSWORD"
        correct={passwordIsCorrect}
        // error=""
        isSecure={isSecure}
        isSecureText
        handleSecure={setSecure}
        style={styles.input}
      />

      <View style={styles.underInput}>
        <CheckBox
          value={remember}
          handle={setRemember}
          text="Remember me"
        />
        <Linked
          text="Forgot password?"
          onPress={() => NavigationService.navigate(routes.Welcome.Forgot)}
        />
      </View>

      <FacebookButton style={styles.fb} />

      <View style={styles.emptySpace} />

      <Button
        text="LOG IN"
        onPress={handleLogIn}
        isActive={loginIsCorrect && passwordIsCorrect}
      />
      <Button
        text="CREATE ACCOUNT"
        onPress={() => NavigationService.navigate(routes.Welcome.SignUp)}
        isActive
        second
      />
    </Wrapper>
  );
};

export default connect(
  null,
  {
    auth: signIn,
  },
)(LogIn);
