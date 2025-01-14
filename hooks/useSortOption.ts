import { SortOption } from "@/classes/SortOption";
import { sortOptions } from "@/constants/sortOptions";
import { useState } from "react";

export const useSortOption = (initialSortOption: SortOption = sortOptions[0]) => {
    const [sortOption, setSortOption] = useState<SortOption>(initialSortOption);
    const [isAscending, setIsAscending] = useState<boolean>(true);

    return { sortOption, setSortOption, isAscending, setIsAscending };
}