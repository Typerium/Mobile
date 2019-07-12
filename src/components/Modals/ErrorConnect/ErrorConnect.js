// @flow
import React from 'react';
import { Modal, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { OfflineIcon, CloseIcon } from 'assets/image';
import { Text, Linked } from 'components';
import styles from './styles';

type Props = {
  visible?: boolean
}

const ErrorConnect = ({ visible }: Props) => (
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
          <CloseIcon width={17} height={17} />
        </View>

      </LinearGradient>
    </View>
  </Modal>
);

ErrorConnect.defaultProps = {
  visible: false,
};

export default ErrorConnect;
