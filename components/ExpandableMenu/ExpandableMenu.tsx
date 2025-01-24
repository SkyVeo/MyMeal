import { StyleSheet, View, Animated, StyleProp, ViewStyle, Text, TextStyle, Pressable } from "react-native";
import React, { PropsWithChildren } from "react";

import { useExpandableMenu } from "./ExpandableMenu.hooks";
import Icon, { IconProps } from "../Icon";

export interface ExpandableMenuProps extends PropsWithChildren {
  titleContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  expandedIconProps?: IconProps;
  collapsedIconProps?: IconProps;
  expandableContainerStyle?: StyleProp<ViewStyle>;
  animationDuration?: number;
  renderChildrenCollapsed?: boolean;
}

const ICON_SIZE = 20;

const ExpandableMenu = ({
  titleContainerStyle,
  title,
  titleStyle,
  expandedIconProps,
  collapsedIconProps,
  expandableContainerStyle,
  animationDuration,
  children,
}: ExpandableMenuProps) => {
  const { height, expanded, handleContentLayout, toggleMenu } = useExpandableMenu(animationDuration);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleMenu} style={[styles.titleContainer, titleContainerStyle]}>
        <Text style={titleStyle}>{title}</Text>
        {expanded ? (
          <Icon name="up" size={ICON_SIZE} {...expandedIconProps} />
        ) : (
          <Icon name="down" size={ICON_SIZE} {...collapsedIconProps} />
        )}
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
