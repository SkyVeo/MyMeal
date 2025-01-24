import { useMemo, useState } from "react";

import { Tag } from "@/classes/Tag";

export const useSortedTags = (tags: Tag[] = []) => {
    const sortedTags = useMemo(() => tags.sort((a, b) => a.title.localeCompare(b.title)), [tags]);

    return { sortedTags };
};

export const useSelectedTags = (preselectedTags: Tag[] = []) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>(preselectedTags);

    const handleTagPress = (tag: Tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const resetTags = () => {
        setSelectedTags(preselectedTags);
    };

    return { selectedTags, setSelectedTags, handleTagPress, resetTags };
};
