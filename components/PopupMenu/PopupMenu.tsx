import {
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { PropsWithChildren, useState, useRef } from "react";
import Icon from "../Icon/Icon";
import { colors } from "@/constants/colors";

export interface PopupMenuItem {
  label: string;
  value?: any;
  onPress?: () => void;
}

export interface PopupMenuProps {
  items?: PopupMenuItem[];
  selectedItemIndex?: number;
  onPressItem?: (item: PopupMenuItem) => void;
}

export default function PopupMenu(props: PropsWithChildren<PopupMenuProps>) {
  const { items, selectedItemIndex, onPressItem, children } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const touchableRef = useRef<TouchableOpacity>(null);
  const scale = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    opacity: scale.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
    transform: [{ translateY: scale.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }],
    top: menuPosition.top,
    left: menuPosition.left,
  };

  const resizeBox = (to: number) => {
    to === 1 && setIsVisible(true);
    Animated.timing(scale, {
      toValue: to,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => to === 0 && setIsVisible(false));
  };

  const showMenu = () => {
    touchableRef.current?.measure((fx, fy, width, height, px, py) => {
      setMenuPosition({ top: py, left: px });
      resizeBox(1);
    });
  };

  const adjustMenuPosition = (menuWidth: number) => {
    const screenWidth = Dimensions.get("window").width;
    const offset = 10;
    const left = Math.min(Math.max(offset, menuPosition.left), screenWidth - menuWidth - offset);
    setMenuPosition((prevPosition) => ({ ...prevPosition, left }));
  };

  return (
    <>
      <TouchableOpacity ref={touchableRef} onPress={showMenu}>
        {children}
      </TouchableOpacity>
      <Modal visible={isVisible} transparent animationType="fade">
        <SafeAreaView style={{ flex: 1 }} onTouchStart={() => resizeBox(0)}>
          <Animated.View
            onLayout={(event) => adjustMenuPosition(event.nativeEvent.layout.width)}
            style={[styles.container, animatedStyle]}
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
