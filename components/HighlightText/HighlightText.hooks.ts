import { RegExpBuilder } from "@/classes/RegExpBuilder";
import { useMemo } from "react";

export type SearchValue = string | RegExp | string[];

const createRegex = (searchValue: SearchValue, allowSpacesBetweenCharacters: boolean, caseSensitive: boolean) => {
    if (searchValue instanceof RegExp) {
        return searchValue;
    }
    const builder = new RegExpBuilder(...(Array.isArray(searchValue) ? searchValue : [searchValue])).escape();
    if (allowSpacesBetweenCharacters) {
        builder.allowSpacesBetweenCharacters();
    }
    return builder.build(caseSensitive ? "g" : "gi");
};

const getSegments = (text: string, regex: RegExp, ignoreAccents: boolean) => {
    const textToMatch = ignoreAccents ? RegExpBuilder.removeAccents(text) : text;
    const segments = [];
    let lastIndex = 0;

    for (const match of textToMatch.matchAll(regex)) {
        const start = match.index;
        const end = start + match[0].length;

        if (start > lastIndex) {
            segments.push({ text: text.slice(lastIndex, start), highlight: false });
        }
        segments.push({ text: text.slice(start, end), highlight: true });
        lastIndex = end;
    }

    if (lastIndex < text.length) {
        segments.push({ text: text.slice(lastIndex), highlight: false });
    }

    return segments;
};

export const useHighlightText = (
    text: string = "",
    searchValue: SearchValue = [],
    allowSpacesBetweenCharacters: boolean = false,
    caseSensitive: boolean = false,
    ignoreAccents: boolean = false
) => {
    const highlightRegex = useMemo(
        () => createRegex(searchValue, allowSpacesBetweenCharacters, caseSensitive),
        [searchValue, caseSensitive]
    );

    const textSegments = useMemo(() => getSegments(text, highlightRegex, ignoreAccents), [text, highlightRegex]);

    return { textSegments, highlightRegex };
};
