import { StyleSheet } from "react-native";
import React from "react";

import { ScaleButton, ScaleButtonProps } from "../Button";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";

export interface FilterButtonProps extends ScaleButtonProps {
  focused?: boolean;
}

const FilterButton = ({ style, titleStyle, focused = false, ...props }: FilterButtonProps) => {
  const borderColor = focused ? colors.light.backgroundSecondary : colors.light.background;
  const titleColor = focused ? colors.light.backgroundSecondary : colors.light.text;

  return (
    <ScaleButton
      style={[styles.button, { borderColor }, style]}
      titleStyle={[styles.title, { color: titleColor }, titleStyle]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    ...globalStyles.shadow,
    backgroundColor: colors.light.background,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
  },
  title: {
    ...globalStyles.regular,
    fontSize: 14,
  },
});

export default FilterButton;
