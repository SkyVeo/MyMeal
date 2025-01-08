export function removeAccents(value: string) {
    return value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export function removeSpaces(value: string) {
    return value.replace(/\s+/g, "");
}

export function escape(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function allowSpacesBetweenCharacters(value: string, shouldEscape: boolean = false) {
    return value
        .split("")
        .map((char) => `${shouldEscape ? escape(char) : char}\\s*`)
        .join("")
        .slice(0, -3);
}
