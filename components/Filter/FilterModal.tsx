import { Modal, ModalProps, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import Icon from "../Icon";
import OpacityOverlay from "../OpacityOverlay";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";
import FilterTagsSection, { FilterTagsSectionProps } from "./FilterTagsSection";
import FilterSortSection, { FilterSortSectionProps } from "./FilterSortSection";
import FilterOrderSection, { FilterOrderSectionProps } from "./FilterOrderSection";
import FilterHeader from "./FilterHeader";
import ApplyButton from "./ApplyButton";
import { Tag } from "@/classes/Tag";
import { SortOption } from "@/classes/SortOption";
import { useFilter } from "./Filter.hooks";
import ClearButton from "./ClearButton";
import { sortOptions } from "@/constants/sortOptions";

export interface FilterModalProps extends ModalProps {
  tags?: FilterTagsSectionProps["tags"];
  selectedTags?: FilterTagsSectionProps["tags"];
  sortOption?: FilterSortSectionProps["sortOption"];
  isAscending?: FilterOrderSectionProps["isAscending"];
  onClose?: () => void;
  onApply?: (newSelectedTags: Tag[], newSortOption: SortOption, newIsAscending: boolean) => void;
}

const FilterModal = ({
  visible,
  tags,
  selectedTags,
  sortOption,
  isAscending,
  onClose,
  onApply,
  ...props
}: FilterModalProps) => {
  const { newSelectedTags, handleTagPress, clearTags, newSortOption, setSortOption, newIsAscending, setIsAscending } =
    useFilter(selectedTags, sortOption, isAscending);

  const handleCancel = () => {
    onClose?.();
  };

  const handleApply = () => {
    onApply?.(newSelectedTags, newSortOption, newIsAscending);
    onClose?.();
  };

  return (
    <>
      {visible && <OpacityOverlay />}

      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose} {...props}>
        <Pressable style={{ flex: 1 }} onPress={handleApply} />

        <View style={styles.container}>
          <ScrollView>
            <FilterHeader>
              <Text style={styles.headerText}>Selected filters ({newSelectedTags?.length ?? 0})</Text>
              <Icon name="cancel" size={20} onPress={handleCancel} />
            </FilterHeader>

            <ClearButton selectedTags={newSelectedTags} onClear={clearTags} onPressTag={handleTagPress} />

            <FilterTagsSection tags={tags} selectedTags={newSelectedTags} onPressTag={handleTagPress} />
            <FilterSortSection sortOptions={sortOptions} sortOption={newSortOption} onPressSortOption={setSortOption} />
            <FilterOrderSection isAscending={newIsAscending} onPressOrder={setIsAscending} />
          </ScrollView>
          <ApplyButton onPress={handleApply} />
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
