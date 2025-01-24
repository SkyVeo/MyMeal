import React, { useCallback } from "react";

import FilterSection from "./FilterSection";
import FilterButton from "./FilterButton";

export interface FilterOrderSectionProps {
  isAscending?: boolean;
  onPressOrder?: (isAscending: boolean) => void;
}

const FilterOrderSection = ({ isAscending = true, onPressOrder }: FilterOrderSectionProps) => {
  const data = [true, false];

  const renderItem = useCallback((item: boolean, index: number) => {
    return (
      <FilterButton 
        key={index}
        title={item ? "Ascending" : "Descending"} 
        focused={item === isAscending} 
        onPress={() => onPressOrder?.(item)}
      />
    )
  }, [isAscending, onPressOrder]);

  return <FilterSection title="Order" data={data} renderItem={renderItem} />;
};

export default FilterOrderSection;
