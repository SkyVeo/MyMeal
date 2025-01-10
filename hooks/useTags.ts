import { useCallback, useMemo, useState } from "react";

import { Tag } from "@/classes/Tag";

export const useTags = (tags: Tag[], preselectedTags: Tag[] = []) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>(preselectedTags);

    const sortedTags = useMemo(() => tags.sort((a, b) => a.title.localeCompare(b.title)), [tags]);

    const handleTagPress = useCallback(
        (tag: Tag) => {
            if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter((t) => t !== tag));
            } else {
                setSelectedTags([...selectedTags, tag]);
            }
        },
        [selectedTags]
    )

    return { sortedTags, selectedTags, handleTagPress };
};
