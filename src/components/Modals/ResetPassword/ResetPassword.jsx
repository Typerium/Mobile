// @flow
import React from 'react';
import { Modal, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { showResetPassword } from '~/store/modals/actions';
import { EmailIcon } from '~/assets/image';
import { Text } from '~/components';
import styles from './styles';

type Props = {
  open: boolean,
  setHide: () => {}
}

const ResetPassword = ({ open, setHide }: Props) => (
  <Modal
    animationType="fade"
    visible={open}
    transparent
    hardwareAccelerated
  >
    <TouchableHighlight
      onPress={setHide}
      style={styles.container}
    >
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
    </TouchableHighlight>
  </Modal>
);

export default connect(state => ({
  open: state.modals.modal_resetPassword,
}),
{
  setHide: () => showResetPassword(false),
})(ResetPassword);
