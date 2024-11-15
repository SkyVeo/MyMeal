import { SafeAreaView, StyleSheet } from "react-native";

export interface MenuOverlayProps {
  onClose?: () => void;
}

const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  return <SafeAreaView style={styles.overlay} onTouchStart={onClose} />;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
});

export default MenuOverlay;
