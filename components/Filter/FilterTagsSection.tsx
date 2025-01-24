import { StyleSheet } from "react-native";
import React, { useCallback } from "react";

import FilterSection from "./FilterSection";
import { Tag } from "@/classes/Tag";
import FilterButton from "./FilterButton";

export interface FilterTagsSectionProps {
  tags?: Tag[];
  selectedTags?: Tag[];
  onPressTag?: (tag: Tag) => void;
}

const FilterTagsSection = ({ tags, selectedTags, onPressTag }: FilterTagsSectionProps) => {
  const renderItem = useCallback(
    (tag: Tag, index: number) => {
      return (
        <FilterButton
          key={index}
          title={tag.toString()}
          onPress={() => onPressTag?.(tag)}
          focused={selectedTags?.includes(tag)}
        />
      );
    },
    [selectedTags, onPressTag]
  );

  return <FilterSection title="Filters" titleContainerStyle={styles.container} data={tags} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
  },
  wrapListContainer: {
    gap: 10,
  },
});

export default FilterTagsSection;
