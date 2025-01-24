import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import React from "react";
import Icon, { IconProps } from "../Icon";

export interface ButtonContentProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  leftIconProps?: IconProps;
  rightIconProps?: IconProps;
}

const ButtonContent = ({ title, titleStyle, leftIconProps, rightIconProps }: ButtonContentProps) => {
  return (
    <>
      {leftIconProps && <Icon {...leftIconProps} />}
      <Text style={titleStyle}>{title}</Text>
      {rightIconProps && <Icon {...rightIconProps} />}
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
  },
});

export default ButtonContent;
