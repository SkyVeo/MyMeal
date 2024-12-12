import { useMemo } from "react";

import { Tag } from "@/classes/tag";
import { compare } from "@/app/(tabs)";

export const useSortedTags = (tags: Tag[], ascending: boolean = true) => {
    const sortedTags = useMemo(
        () => tags.sort((a, b) => compare(a.title, b.title, (a, b) => a.localeCompare(b), ascending)),
        [tags, ascending]
    );

    return { sortedTags };
};
