import { SortOption } from "@/classes/SortOption";
import { Tag } from "@/classes/Tag";
import { defaultSortOption } from "@/constants/sortOptions";
import { useSyncedState } from "@/hooks/useSyncedState";
import { useSelectedTags } from "@/hooks/useTags";
import { useEffect } from "react";

export const useFilter = (
    selectedTags: Tag[] = [],
    sortOption: SortOption = defaultSortOption,
    isAscending: boolean = true
) => {
    const { selectedTags: newSelectedTags, handleTagPress, setSelectedTags } = useSelectedTags(selectedTags);
    const [newSortOption, setSortOption] = useSyncedState<SortOption>(sortOption);
    const [newIsAscending, setIsAscending] = useSyncedState<boolean>(isAscending);

    useEffect(() => {
        setSelectedTags(selectedTags);
    }, [selectedTags]);

    const clearTags = () => {
        setSelectedTags([]);
    };

    return {
        newSelectedTags,
        handleTagPress,
        setSelectedTags,
        clearTags,
        newSortOption,
        setSortOption,
        newIsAscending,
        setIsAscending,
    };
};
