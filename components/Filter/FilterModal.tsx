import { Modal, ModalProps, Pressable, PressableProps, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "../Icon";
import OpacityOverlay from "../OpacityOverlay";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";
import FilterTagsSection, { FilterTagsSectionProps } from "./FilterTagsSection";
import FilterSortSection, { FilterSortSectionProps } from "./FilterSortSection";
import FilterOrderSection, { FilterOrderSectionProps } from "./FilterOrderSection";
import FilterHeader from "./FilterHeader";
import ApplyButton from "./ApplyButton";
import { useTags } from "@/hooks/useTags";

// TODO apply onClose
export interface FilterModalProps
  extends ModalProps,
    FilterTagsSectionProps,
    FilterSortSectionProps,
    FilterOrderSectionProps {
  onClearTags?: PressableProps["onPress"];
  onClose?: () => void;
}

const FilterModal = ({
  visible,
  tags,
  selectedTags,
  onPressTag,
  onClearTags,
  sortOption,
  onPressSortOption,
  isAscending,
  onPressOrder,
  onClose,
  ...props
}: FilterModalProps) => {
  // const { selectedTags: newSelectedTags, setSelectedTags } = useTags(undefined, selectedTags);

  return (
    <>
      {visible && <OpacityOverlay />}

      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose} {...props}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />

        <View style={styles.container}>
          <ScrollView>
            <FilterHeader>
              <Text style={styles.headerText}>Selected filters ({selectedTags?.length ?? 0})</Text>
              <Icon name="cancel" size={20} onPress={onClose} />
            </FilterHeader>

            {/* <Pressable onPress={onClearTags}>
              <Text>Clear all filters</Text>
            </Pressable> */}

            <FilterTagsSection tags={tags} selectedTags={selectedTags} onPressTag={onPressTag} />
            <FilterSortSection sortOption={sortOption} onPressSortOption={onPressSortOption} />
            <FilterOrderSection isAscending={isAscending} onPressOrder={onPressOrder} />
          </ScrollView>
          <ApplyButton onPress={onClose} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: colors.light.background,
    borderRadius: 20,
  },
  headerText: {
    ...globalStyles.medium,
    fontSize: 16,
  },
});

export default FilterModal;
