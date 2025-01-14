import { Modal, ModalProps, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "../Icon";
import TagList from "../TagList";
import { Tag } from "@/classes/Tag";
import { Meal } from "@/classes/Meal";
import { pluralize } from "@/utils/formatText";
import OpacityOverlay from "../OpacityOverlay";

export interface FilterModalProps extends ModalProps {
  meals?: Meal[];
  tags?: Tag[];
  selectedTags?: Tag[];
  onPressTag?: (tag: Tag) => void;
  onClearTags?: PressableProps["onPress"];
  onClose?: () => void;
}

const FilterModal = ({
  visible,
  meals,
  tags,
  selectedTags,
  onPressTag,
  onClearTags,
  onClose,
  ...props
}: FilterModalProps) => {
  return (
    <>
      {visible && <OpacityOverlay />}

      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose} {...props}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.container}>
          <Icon name="cancel" size={20} onPress={onClose} />

          <Pressable onPress={onClearTags}>
            <Text>Clear all filters</Text>
          </Pressable>

          <TagList tags={tags} selectedTags={selectedTags} onPressTag={onPressTag} />

          <Pressable onPress={onClose}>
            <Text>Show {pluralize("meal", meals ? meals.length : 0)}</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: "#fff",
  },
});

export default FilterModal;
