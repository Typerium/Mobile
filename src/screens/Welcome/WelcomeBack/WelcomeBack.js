// @flow

import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Wrapper,
  WelcomeSubtitle,
  Input,
  CheckBox,
  Button,
  FacebookButton,
  Linked,
  PhotoProfile,
} from '~/components';
import { NavigationService, routes } from '~/navigation';
import styles from './styles';


const WelcomeBack = () => {
  const [password, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  const correct = password.length > 3;

  return (
    <Wrapper style={styles.container} padding>
      <WelcomeSubtitle style={styles.subtitle}>
        Log in with your e-mail or continue with
        social media.
      </WelcomeSubtitle>

      <PhotoProfile
        text="Sindy Strife"
        style={styles.photo}
      />

      <Input
        value={password}
        onChangeText={setPassword}
        label="Password"
        labelSecond="PASSWORD"
        correct={correct}
        error=""
        isSecure={isSecure}
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
        onPress={() => NavigationService.navigate(routes.Welcome.LogIn)}
        isActive={correct}
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
export default WelcomeBack;
