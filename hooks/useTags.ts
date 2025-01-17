import { useMemo, useState } from "react";

import { Tag } from "@/classes/Tag";

export const useTags = (tags: Tag[] = [], preselectedTags: Tag[] = []) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>(preselectedTags);

    const sortedTags = useMemo(() => tags.sort((a, b) => a.title.localeCompare(b.title)), [tags]);

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

    return { sortedTags, selectedTags, setSelectedTags, handleTagPress, resetTags };
};
