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
} from 'components';
import { NavigationService, routes } from 'navigation';
import { authSaga } from 'store/app/actions';
import styles from './styles';

type Props = {
  auth: ({email: string, password: string}) => {}
}

const LogIn = ({ auth }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  const handleLogIn = () => auth({ email, password });

  return (
    <Wrapper style={styles.container} padding>
      <WelcomeSubtitle style={styles.subtitle}>
        Log in with your e-mail or continue with
        social media.
      </WelcomeSubtitle>

      <Input
        value={email}
        onChangeText={setEmail}
        label="E-mail or username"
        labelSecond="EMAIL or USERNAME"
        correct={email.length > 2 ? 'Error' : ''}
        error={email.length === 2 ? 'Error' : ''}
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
        isActive
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
    auth: authSaga,
  },
)(LogIn);
