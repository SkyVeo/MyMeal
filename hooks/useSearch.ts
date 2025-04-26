import { useMemo, useState } from "react";

import { allowSpacesBetweenCharacters, removeAccents } from "@/utils/formatText";

export const useSearch = (initialQuery: string = "") => {
    const [search, setSearch] = useState(initialQuery);

    const { searchWords, highlightPatterns } = useMemo(() => {
        const searchWords = removeAccents(search)
            .split(" ")
            .filter((word) => word.length > 0);
        const highlightPatterns = searchWords.map((word) => allowSpacesBetweenCharacters(word, true));

        return { searchWords, highlightPatterns };
    }, [search]);

    return { search, setSearch, searchWords, highlightPatterns };
};
