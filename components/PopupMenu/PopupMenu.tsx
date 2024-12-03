import { Pressable, TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";

import { usePopupMenu } from "./PopupMenu.hooks";
import MenuModal from "./MenuModal";
import Touchable from "../Touchable";

export interface PopupMenuItem {
  label: string;
  value?: any;
  onPress?: () => void;
}

export interface PopupMenuProps extends PropsWithChildren {
  items?: PopupMenuItem[];
  selectedItemIndex?: number;
  onPressItem?: (item: PopupMenuItem) => void;
}

const PopupMenu = ({ items, selectedItemIndex, onPressItem, children }: PopupMenuProps) => {
  const { animatedStyle, touchableRef, isVisible, menuPosition, adjustMenuPosition, handleOpen, handleClose } =
    usePopupMenu();

  return (
    <>
      <Touchable ref={touchableRef} onPress={handleOpen}>
        {children}
      </Touchable>
      <MenuModal
        style={animatedStyle}
        visible={isVisible}
        menuPosition={menuPosition}
        adjustMenuPosition={adjustMenuPosition}
        onClose={handleClose}
        items={items}
        selectedItemIndex={selectedItemIndex}
        onPressItem={onPressItem}
      />
    </>
  );
};

export default PopupMenu;
