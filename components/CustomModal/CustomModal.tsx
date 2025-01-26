import { View, Modal, ModalProps, Pressable, StyleSheet } from "react-native";
import React from "react";

import OpacityOverlay from "../OpacityOverlay";

export interface CustomModalProps extends ModalProps {
  onClose?: () => void;
}

const CustomModal = ({ style, visible, onClose, children, ...props }: CustomModalProps) => {
  return (
    <>
      {visible && <OpacityOverlay />}

      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose} {...props}>
        <Pressable style={styles.overlayPressable} onPress={onClose} />

        <View style={[styles.modalContainer, style]}>{children}</View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlayPressable: {
    flex: 1,
  },
  modalContainer: {
    height: "90%",
  },
});

export default CustomModal;
