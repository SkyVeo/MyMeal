import { useState } from "react";

import { SortOption } from "@/classes/SortOption";
import { defaultSortOption } from "@/constants/sortOptions";

export const useSortOption = (initialSortOption: SortOption = defaultSortOption, initialIsAscending: boolean = true) => {
    const [sortOption, setSortOption] = useState<SortOption>(initialSortOption);
    const [isAscending, setIsAscending] = useState<boolean>(initialIsAscending);

    return { sortOption, setSortOption, isAscending, setIsAscending };
}