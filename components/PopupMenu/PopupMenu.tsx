import { TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";

import { usePopupMenu } from "./PopupMenu.hooks";
import MenuModal from "./MenuModal";

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
  const { animatedStyle, touchableRef, isVisible, menuPosition, adjustMenuPosition, showMenu, closeMenu } =
    usePopupMenu();

  return (
    <>
      <TouchableOpacity ref={touchableRef} onPress={showMenu}>
        {children}
      </TouchableOpacity>
      <MenuModal
        style={animatedStyle}
        isVisible={isVisible}
        menuPosition={menuPosition}
        adjustMenuPosition={adjustMenuPosition}
        onClose={closeMenu}
        items={items}
        selectedItemIndex={selectedItemIndex}
        onPressItem={onPressItem}
      />
    </>
  );
};

export default PopupMenu;
