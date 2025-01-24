import { StyleProp, ViewStyle } from "react-native";
import React from "react";

import Scale, { ScaleProps } from "../Animation/Scale";
import ButtonContent, { ButtonContentProps, styles } from "./ButtonContent";

export interface ScaleButtonProps extends ButtonContentProps, ScaleProps {
  style?: StyleProp<ViewStyle>;
}

const ScaleButton = ({
  style,
  onPressTiming = "before",
  title,
  titleStyle,
  leftIconProps,
  rightIconProps,
  ...props
}: ScaleButtonProps) => {
  return (
    <Scale style={[styles.container, style]} onPressTiming={onPressTiming} {...props}>
      <ButtonContent
        title={title}
        titleStyle={titleStyle}
        leftIconProps={leftIconProps}
        rightIconProps={rightIconProps}
      />
    </Scale>
  );
};

export default ScaleButton;
