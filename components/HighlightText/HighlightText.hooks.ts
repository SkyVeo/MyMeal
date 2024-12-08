import { useMemo } from "react";

const escapeRegExp = (text: string) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const createRegexPattern = (searchWords: string[], ignoreTextSpaces: boolean) => {
    const processWord = (word: string) => {
        if (ignoreTextSpaces && word.length > 1) {
            return `${escapeRegExp(word[0])}${word
                .slice(1)
                .split("")
                .map((char) => `\\s*${escapeRegExp(char)}`)
                .join("")}`;
        }
        return escapeRegExp(word);
    };
    return `(${searchWords.map(processWord).join("|")})`;
};

export const useHighlightText = (
    text: string,
    searchWords: string[],
    ignoreTextSpaces: boolean,
    caseSensitive: boolean
) => {
    if (!searchWords.length) {
        return { textSegments: [text], highlightRegex: null };
    }

    // TODO try with string
    const highlightRegex = useMemo(
        () => new RegExp(createRegexPattern(searchWords, ignoreTextSpaces), caseSensitive ? "g" : "gi"),
        [searchWords, ignoreTextSpaces, caseSensitive]
    );
    const textSegments = useMemo(() => text.split(highlightRegex), [text, highlightRegex]);

    return { textSegments, highlightRegex };
};
