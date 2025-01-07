import { findAll } from "highlight-words-core";
import { useMemo } from "react";

export const useHighlightText = (
    textToHighlight: string,
    searchWords: string[] = [],
    caseSensitive?: boolean,
    autoEscape?: boolean,
    sanitize?: (text: string) => string
) => {
    const chunks = useMemo(() => {
        return findAll({
            textToHighlight,
            searchWords,
            caseSensitive,
            autoEscape,
            sanitize,
        });
    }, [textToHighlight, searchWords, caseSensitive, autoEscape, sanitize]);

    return { chunks };
};
