import { useMemo, useState } from "react";

import { allowSpacesBetweenCharacters, removeAccents } from "@/utils/formatText";

export const useQuery = (initialQuery: string = "") => {
    const [query, setQuery] = useState(initialQuery);

    const { searchWords, highlightPatterns } = useMemo(() => {
        const searchWords = removeAccents(query)
            .split(" ")
            .filter((word) => word.length > 0);
        const highlightPatterns = searchWords.map((word) => allowSpacesBetweenCharacters(word, true));

        return { searchWords, highlightPatterns };
    }, [query]);

    return { query, setQuery, searchWords, highlightPatterns };
};
