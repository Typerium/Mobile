/* eslint-disable import/no-unresolved */
// @flow

import React from 'react';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import { openInbox } from 'react-native-email-link';

import {
  Wrapper,
  WelcomeSubtitle,
  Button,
  Text,
} from '~/components';
import { resendEmail } from '~/store/welcome/actions';
import styles from './styles';

type Props = {
  email: string,
  resend?: () => {}
}

const ConfirmEmail = ({ resend, email }: Props) => {
  const handleResend = () => {
    if (resend) resend();
  };

  const openMailApp = () => {
    try {
      openInbox();
    } catch (e) {
      Linking.openURL('mailto:');
    }
  };

  return (
    <Wrapper style={styles.container} padding>
      <WelcomeSubtitle
        style={styles.subtitle}
        styleText={styles.subtitleText}
      >
        {'We sent an email to you at '}
        <Text style={styles.subtitleEmail}>{email}</Text>
        {'.\n\nPlease check your email and follow the link to activate zour Typerium account.'}
      </WelcomeSubtitle>

      <Button
        text="OPEN MAIL APP"
        onPress={openMailApp}
        isActive
      />
      <Button
        text="RESEND EMAIL"
        onPress={handleResend}
        second
        isActive
      />
    </Wrapper>
  );
};

ConfirmEmail.defaultProps = {
  resend: () => {},
};

export default connect(
  state => ({
    email: state.welcome.email,
  }),
  {
    resend: resendEmail,
  },
)(ConfirmEmail);
