import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import sizes from "@/constants/sizes";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import { Tag } from "@/classes/Tag";
import Icon from "../Icon";
import WrapList from "../WrapList";

export interface ClearButtonProps {
  selectedTags?: Tag[];
  onClear?: TouchableOpacityProps["onPress"];
  onPressTag?: (tag: Tag) => void;
}

const ClearButton = ({ selectedTags = [], onClear, onPressTag }: ClearButtonProps) => {
  const renderTag = (tag: Tag, index: number) => {
    return (
      <TouchableOpacity key={index} style={styles.tagButtonContainer} onPress={() => onPressTag?.(tag)}>
        <Text style={styles.text}>{tag.title}</Text>
        <Icon name="cancel" size={14} color={colors.light.backgroundSecondary} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.clearButtonContainer} onPress={onClear}>
        <Text style={styles.text}>Clear all filters</Text>
      </TouchableOpacity>

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
  }
});

export default ClearButton;
