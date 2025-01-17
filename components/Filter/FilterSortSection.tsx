import React from "react";

import { SortOption } from "@/classes/SortOption";
import FilterSection from "./FilterSection";
import ButtonList from "./ButtonList";
import { sortOptions } from "@/constants/sortOptions";

export interface FilterSortSectionProps {
  sortOption?: SortOption;
  onPressSortOption?: (sortOption: SortOption) => void;
}

// TODO pass sortOptions as props
const FilterSortSection = ({ sortOption, onPressSortOption }: FilterSortSectionProps) => {
  return (
    <FilterSection title="Sort By">
      <ButtonList
        data={sortOptions}
        titleExtractor={(option) => option.label}
        focusedExtractor={(option) => sortOption === option}
        onPress={onPressSortOption}
      />
    </FilterSection>
  );
};

export default FilterSortSection;
