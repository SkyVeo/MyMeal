import { StyleSheet, View, Animated, StyleProp, ViewStyle, Text, TextStyle, Pressable } from "react-native";
import React, { PropsWithChildren } from "react";

import { useExpandableMenu } from "./ExpandableMenu.hooks";
import Icon, { IconProps } from "../Icon";

export interface ExpandableMenuProps extends PropsWithChildren {
  titleContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  iconProps?: IconProps;
  expandedIconName?: IconProps["name"];
  collapsedIconName?: IconProps["name"];
  expandableContainerStyle?: StyleProp<ViewStyle>;
  animationDuration?: number;
  renderChildrenCollapsed?: boolean;
}

const ExpandableMenu = ({
  titleContainerStyle,
  title,
  titleStyle,
  iconProps,
  expandedIconName = "up",
  collapsedIconName = "down",
  expandableContainerStyle,
  animationDuration,
  children,
}: ExpandableMenuProps) => {
  const { height, expanded, handleContentLayout, toggleMenu } = useExpandableMenu(animationDuration);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleMenu} style={[styles.titleContainer, titleContainerStyle]}>
        <Text style={titleStyle}>{title}</Text>
        <Icon name={expanded ? expandedIconName : collapsedIconName} size={20} {...iconProps} />
      </Pressable>

      <Animated.View style={{ height }}>
        <View onLayout={handleContentLayout} style={styles.hiddenContent}>
          <View style={expandableContainerStyle}>{children}</View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hiddenContent: {
    overflow: "hidden",
    position: "absolute",
  },
});

export default ExpandableMenu;
