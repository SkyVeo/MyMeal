import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";

import Scale, { ScaleProps } from "../Animation/Scale";

export interface ButtonProps extends ScaleProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

const Button = ({ style, title, titleStyle, onPressTiming = "before", ...props }: ButtonProps) => {
  return (
    <Scale style={style} onPressTiming={onPressTiming} {...props}>
      <Text style={titleStyle}>{title}</Text>
    </Scale>
  );
};

export default Button;
