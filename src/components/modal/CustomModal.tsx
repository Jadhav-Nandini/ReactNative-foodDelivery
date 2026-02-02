
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { screenHeight } from '@unistyles/Constants';
import { BlurView } from '@react-native-community/blur';
import Icon from '@components/global/Icon';

type CustomModalRef = {
  openModal: (data: React.ReactNode) => void;
  closeModal: () => void;
};

const CustomModal = forwardRef<CustomModalRef, {}>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  useImperativeHandle(ref, () => ({
    openModal: (data: React.ReactNode) => {
      setContent(data);
      setVisible(true);
    },
    closeModal: () => {
      setVisible(false);
    },
  }));

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"           // gives nice bottom-up feel
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent           // Android: lets blur go under status bar
      hardwareAccelerated            // can help performance on Android
    >
      {/* Blur backdrop — covers entire screen */}
      <BlurView
        style={styles.blurBackdrop}
        blurAmount={21}  
      
      />

      {/* Content wrapper — on top of blur */}
      <View style={styles.modalContent}>
        <View style={styles.sheetContainer}>
          {/* Floating close button above the sheet */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Icon iconFamily="Ionicons" name="close" size={26} color="#fff" />
          </TouchableOpacity>

          {/* Your passed content (AddItem, RemoveItem, etc.) */}
          <View style={styles.innerContent}>
            {content ? (
              content
            ) : (
              <Text style={styles.placeholder}>No content provided</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default CustomModal;

const styles = StyleSheet.create({
  blurBackdrop: {
    ...StyleSheet.absoluteFillObject,  
  },
  modalContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: screenHeight * 0.75,
    minHeight: 200,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 40,                     // space for close button
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  innerContent: {
    width: '100%',
    flex: 1,
  },
  placeholder: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    padding: 40,
    fontFamily: 'Okra-Medium',
  },
});

















