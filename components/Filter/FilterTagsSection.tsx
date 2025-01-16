import { StyleSheet } from "react-native";
import React from "react";

import FilterSection from "./FilterSection";
import ButtonList from "./ButtonList";
import { Tag } from "@/classes/Tag";

export interface FilterTagsSectionProps {
  tags?: Tag[];
  selectedTags?: Tag[];
  onPressTag?: (tag: Tag) => void;
}

const FilterTagsSection = ({ tags, selectedTags, onPressTag }: FilterTagsSectionProps) => {
  return (
    <FilterSection title="Filters" titleContainerStyle={styles.container}>
      <ButtonList
        data={tags}
        titleExtractor={(tag) => tag.title}
        focusedExtractor={(tag) => selectedTags?.includes(tag) ?? false}
        onPress={onPressTag}
      />
    </FilterSection>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
  },
});

export default FilterTagsSection;
