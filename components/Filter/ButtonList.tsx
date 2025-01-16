import { StyleSheet } from "react-native";
import React from "react";

import Button from "../Button";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";

export interface ButtonListProps<T> {
  data?: T[];
  keyExtractor?: (item: T) => string;
  titleExtractor?: (item: T) => string;
  focusedExtractor?: (item: T) => boolean;
  onPress?: (item: T) => void;
}

const ButtonList = <T,>({ data, keyExtractor, titleExtractor, focusedExtractor, onPress }: ButtonListProps<T>) => {
  const renderItem = (item: T, index: number) => {
    const isFocused = focusedExtractor?.(item);
    const borderColor = isFocused ? colors.light.backgroundSecondary : colors.light.background;
    const titleColor = isFocused ? colors.light.backgroundSecondary : colors.light.text;

    return (
      <Button
        key={keyExtractor?.(item) ?? index}
        style={{ ...styles.button, borderColor }}
        title={titleExtractor?.(item)}
        titleStyle={{ ...styles.title, color: titleColor }}
        onPress={() => onPress?.(item)}
      />
    );
  };

  return data?.map((item, index) => renderItem(item, index));
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

export default ButtonList;
