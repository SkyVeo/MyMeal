import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

import ButtonContent, { ButtonContentProps, styles } from "./ButtonContent";

export interface OpacityButtonProps extends ButtonContentProps, TouchableOpacityProps {}

const ScaleButton = ({ style, title, titleStyle, leftIconProps, rightIconProps, ...props }: OpacityButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <ButtonContent
        title={title}
        titleStyle={titleStyle}
        leftIconProps={leftIconProps}
        rightIconProps={rightIconProps}
      />
    </TouchableOpacity>
  );
};

export default ScaleButton;
