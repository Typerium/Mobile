// @flow

import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Wrapper,
  WelcomeSubtitle,
  Input,
  Button,
} from 'components';
// import { forgot } from 'store/app/actions';
import styles from './styles';

type Props = {
  forgot?: ({email: string}) => {}
}

const Forgot = ({ forgot }: Props) => {
  const [email, setEmail] = useState('');

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
        onChangeText={setEmail}
        label="E-mail or username"
        labelSecond="EMAIL or USERNAME"
        correct={false}
        error={email.length === 5 ? 'Error' : ''}
        style={styles.input}
      />

      <Button
        text="RESET PASSWORD"
        onPress={handleReset}
        isActive
      />
    </Wrapper>
  );
};

Forgot.defaultProps = {
  forgot: () => {},
};

export default connect(
  null,
  {
  },
)(Forgot);
