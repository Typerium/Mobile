// @flow

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';

import { FacebookIcon } from 'assets/image';
import { Text } from 'components';
import styles from './styles';

type Props = {
  error?: (string) => void,
  cancelled?: () => void,
  success?: (string) => void,
  style?: View.propTypes.style
}

const FacebookButton = ({
  error: errorHandle, cancelled, success, style, ...res
}: Props) => (
  // $FlowFixMe
  <TouchableOpacity
    style={[styles.button, style]}
    {...res}
  >

    <FacebookIcon style={styles.icon} />
    <View style={styles.emptySpace} />
    <Text style={styles.textBold}>
        Login
    </Text>
    <Text style={styles.text}>
      {' with '}
    </Text>
    <Text style={styles.textBold}>
        Facebook
    </Text>


    {/* <LoginButton
      style={styles.fb}
      onLoginFinished={
            (error: boolean, result: any) => {
              if (error && errorHandle) errorHandle(result.error);
              else if (result.isCancelled && cancelled) cancelled();
              else if (success) {
                AccessToken.getCurrentAccessToken().then(
                  (data: any) => {
                    success(data.accessToken.toString());
                  },
                );
              }
            }
          }
      onLogoutFinished={() => console.log('logout.')}
    /> */}
  </TouchableOpacity>
);

FacebookButton.defaultProps = {
  error: (text) => { console.log(`login has error: ${text}`); },
  cancelled: () => { console.log('login is cancelled.'); },
  success: () => { console.log('success'); },
  style: {},
};

export default FacebookButton;
