import { StyleSheet, View } from "react-native";
import React from "react";

import sizes from "@/constants/sizes";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import { Tag } from "@/classes/Tag";
import WrapList from "../WrapList";
import { OpacityButton, OpacityButtonProps } from "../Button";

export interface ClearButtonProps {
  selectedTags?: Tag[];
  onClear?: OpacityButtonProps["onPress"];
  onPressTag?: (tag: Tag) => void;
}

const ClearButton = ({ selectedTags = [], onClear, onPressTag }: ClearButtonProps) => {
  const renderTag = (tag: Tag, index: number) => {
    return (
      <OpacityButton
        key={index}
        style={styles.tagButtonContainer}
        title={tag.title}
        titleStyle={styles.text}
        rightIconProps={{ name: "cancel", size: 14, color: colors.light.backgroundSecondary }}
        onPress={() => onPressTag?.(tag)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <OpacityButton
        style={styles.clearButtonContainer}
        title="Clear all"
        titleStyle={styles.text}
        onPress={onClear}
      />

      <WrapList style={styles.wrapList} data={selectedTags} renderItem={renderTag} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.modalPadding,
    gap: 15,
  },
  clearButtonContainer: {
    alignSelf: "flex-start",
    backgroundColor: colors.light.tint,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 5,
  },
  tagButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 5,
    borderWidth: 1,
    borderColor: colors.light.backgroundSecondary,
  },
  text: {
    ...globalStyles.regular,
    fontSize: 14,
  },
  wrapList: {
    gap: 10,
  },
});

export default ClearButton;
