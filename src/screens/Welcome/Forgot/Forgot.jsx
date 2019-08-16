// @flow

import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Wrapper,
  WelcomeSubtitle,
  Input,
  Button,
} from '~/components';
import { forgotPassword } from '~/store/welcome/actions';
import { validateEmail } from '~/utils/validation';
import styles from './styles';

type Props = {
  forgot: ({email: string}) => {}
}

const Forgot = ({ forgot }: Props) => {
  const [email, setEmail] = useState('');
  const loginIsCorrect = validateEmail(email);

  const changeEmail = text => setEmail(text.replace(' ', ''));

  const handleReset = () => {
    if (forgot) forgot({ email });
  };

  return (
    <Wrapper style={styles.container} padding>
      <WelcomeSubtitle style={styles.subtitle}>
        We can reset password if you
        let us your registered Email
      </WelcomeSubtitle>

      <Input
        value={email}
        onChangeText={changeEmail}
        label="E-mail or username"
        labelSecond="EMAIL or USERNAME"
        correct={loginIsCorrect}
        // error={email.length === 5 ? 'Error' : ''}
        style={styles.input}
      />

      <Button
        text="RESET PASSWORD"
        onPress={handleReset}
        isActive={loginIsCorrect}
      />
    </Wrapper>
  );
};

export default connect(
  null,
  {
    forgot: forgotPassword,
  },
)(Forgot);
