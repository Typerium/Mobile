// @flow
import React from 'react';
import { Modal, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { EmailIcon } from 'assets/image';
import { Text } from 'components';
import styles from './styles';

type Props = {
  visible?: boolean
}

const ResetPassword = ({ visible }: Props) => (
  <Modal
    animationType="fade"
    visible={visible}
    transparent
    hardwareAccelerated
  >
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#25272E', '#FFFFFF', '#25272E']}
        style={styles.gradient}
      >

        <View style={styles.errorContainer}>
          <EmailIcon width={35} height={35} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Reset password</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.text}>
                Reset password instructions sent to
                <Text style={[styles.text, styles.textColor]}> sindy@typerium.io</Text>
                . Please check your email
              </Text>
            </View>
          </View>
        </View>

      </LinearGradient>
    </View>
  </Modal>
);

ResetPassword.defaultProps = {
  visible: false,
};

export default ResetPassword;
