import React, { useCallback } from "react";

import { SortOption } from "@/classes/SortOption";
import FilterSection from "./FilterSection";
import FilterButton from "./FilterButton";

export interface FilterSortSectionProps {
  sortOptions?: SortOption[];
  sortOption?: SortOption;
  onPressSortOption?: (sortOption: SortOption) => void;
}

const FilterSortSection = ({ sortOptions, sortOption, onPressSortOption }: FilterSortSectionProps) => {
  const renderItem = useCallback(
    (option: SortOption, index: number) => {
      return (
        <FilterButton
          key={index}
          title={option.label}
          onPress={() => onPressSortOption?.(option)}
          focused={sortOption === option}
        />
      );
    },
    [sortOption, onPressSortOption]
  );

  return <FilterSection title="Sort By" data={sortOptions} renderItem={renderItem} />;
};

export default FilterSortSection;
