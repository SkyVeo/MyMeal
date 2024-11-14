import {
  Text,
  StyleProp,
  ViewStyle,
  Modal,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PropsWithChildren, useState, useRef, useEffect } from "react";
import Icon from "../Icon/Icon";
import { colors } from "@/constants/colors";
import { usePopupMenu } from "./PopupMenu.hooks";

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

export default function PopupMenu({ items, selectedItemIndex, onPressItem, children }: PopupMenuProps) {
  const { animatedStyle, touchableRef, isVisible, menuPosition, adjustMenuPosition, showMenu, closeMenu } =
    usePopupMenu();

  return (
    <>
      <TouchableOpacity ref={touchableRef} onPress={showMenu}>
        {children}
      </TouchableOpacity>
      <Modal visible={isVisible} transparent>
        <SafeAreaView style={{ flex: 1 }} onTouchStart={closeMenu}>
          <Animated.View
            onLayout={(event) =>
              adjustMenuPosition(event.nativeEvent.layout.x, event.nativeEvent.layout.y, event.nativeEvent.layout.width)
            }
            style={[styles.container, animatedStyle, menuPosition]}
          >
            {items?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => {
                  item.onPress?.();
                  onPressItem?.(item);
                }}
              >
                <Text style={[styles.text, selectedItemIndex === index && styles.selected]}>{item.label}</Text>
                <Icon
                  style={[styles.icon, selectedItemIndex === index ? styles.selected : { color: "transparent" }]}
                  name="check"
                  size={16}
                />
              </TouchableOpacity>
            ))}
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

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
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  text: {
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
  },
  selected: {
    color: colors.dark.tabIconSelected,
  },
  icon: {
    marginLeft: 16,
  },
});
