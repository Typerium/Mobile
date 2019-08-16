// @flow
import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { showOffline } from '~/store/modals/actions';
import { OfflineIcon, CloseIcon } from '~/assets/image';
import { Text, Linked } from '~/components';
import styles from './styles';

type Props = {
  open: boolean,
  setHide: () => {},
}

const ErrorConnect = ({ open, setHide }: Props) => (
  <Modal
    animationType="fade"
    visible={open}
    transparent
    hardwareAccelerated
  >
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#25272E', '#904C50', '#FB7171', '#FB7171', '#FB7171', '#904C50', '#25272E']}
        style={styles.gradient}
      >

        <View style={styles.errorContainer}>
          <OfflineIcon width={34} height={35} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>You are offline</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.text}>Tap</Text>
              <Linked
                styleText={styles.text}
                text=" here "
              />
              <Text style={styles.text}>to retry.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.close} onPress={setHide}>
            <CloseIcon width={17} height={17} />
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  </Modal>
);

export default connect(state => ({
  open: state.modals.modal_offline,
}),
{
  setHide: () => showOffline(false),
})(ErrorConnect);
