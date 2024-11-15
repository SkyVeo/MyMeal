import { Modal, Animated, StyleSheet, StyleProp, ViewStyle } from "react-native";
import MenuOverlay from "./MenuOverlay";

import { PopupMenuItem } from "./PopupMenu";
import MenuItem from "./MenuItem";

export interface MenuModalProps {
  style?: StyleProp<ViewStyle>;
  isVisible?: boolean;
  menuPosition?: { top: number; left: number };
  adjustMenuPosition?: (px: number, py: number, width: number) => void;
  onClose?: () => void;
  items?: PopupMenuItem[];
  selectedItemIndex?: number;
  onPressItem?: (item: PopupMenuItem) => void;
}

const MenuModal = ({
  style,
  isVisible,
  menuPosition,
  adjustMenuPosition,
  onClose,
  items,
  selectedItemIndex,
  onPressItem,
}: MenuModalProps) => {
  return (
    <Modal visible={isVisible} transparent>
      <MenuOverlay onClose={onClose} />
      <Animated.View
        onLayout={(event) =>
          adjustMenuPosition?.(event.nativeEvent.layout.x, event.nativeEvent.layout.y, event.nativeEvent.layout.width)
        }
        style={[styles.container, style, menuPosition]}
      >
        {items?.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            isSelected={selectedItemIndex === index}
            onPress={() => {
              item.onPress?.();
              onPressItem?.(item);
              onClose?.();
            }}
          />
        ))}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
});

export default MenuModal;
