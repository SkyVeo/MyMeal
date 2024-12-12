import { useMemo } from "react";

import { Tag } from "@/classes/tag";
import { compare } from "@/app/(tabs)";

export const useSortedTags = (tags: Tag[] = [], ascending: boolean = true) => {
    const sortedTags = useMemo(
        () => tags.sort((a, b) => compare(a.title, b.title, (a, b) => a.localeCompare(b), ascending)),
        [tags, ascending]
    );

    return { sortedTags };
};

export const useTagSelection = (selectedTags: string[] = [], onChangeSelectedTags?: (tags: string[]) => void) => {
    const isTagSelected = (tag: Tag) => selectedTags.includes(tag.title);

    const handleTagPress = (tag: Tag) => {
        if (isTagSelected(tag)) {
            onChangeSelectedTags?.(selectedTags.filter((t) => t !== tag.title));
        } else {
            onChangeSelectedTags?.([...selectedTags, tag.title]);
        }
    };

    return { isTagSelected, handleTagPress };
};
