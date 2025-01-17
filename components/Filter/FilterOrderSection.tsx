import React from "react";

import FilterSection from "./FilterSection";
import ButtonList from "./ButtonList";

export interface FilterOrderSectionProps {
  isAscending?: boolean;
  onPressOrder?: (isAscending: boolean) => void;
}

const FilterOrderSection = ({ isAscending = true, onPressOrder }: FilterOrderSectionProps) => {
  return (
    <FilterSection title="Order">
      <ButtonList
        data={[true, false]}
        titleExtractor={(isAscending) => (isAscending ? "Ascending" : "Descending")}
        focusedExtractor={(item) => item === isAscending}
        onPress={onPressOrder}
      />
    </FilterSection>
  );
};

export default FilterOrderSection;
