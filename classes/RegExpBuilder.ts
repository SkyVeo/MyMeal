export class RegExpBuilder {
    private values: string[];
    private escaped: boolean;
    private spacesBetweenCharactersAllowed: boolean;
    private transformations: ((value: string) => string)[];
    private flags?: string;

    constructor(...values: string[]) {
        this.values = values;
        this.escaped = false;
        this.spacesBetweenCharactersAllowed = false;
        this.transformations = [];
    }

    static removeAccents(value: string) {
        return value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }

    static lowerCase(value: string) {
        return value.toLowerCase();
    }

    static upperCase(value: string) {
        return value.toUpperCase();
    }

    static trim(value: string) {
        return value.trim();
    }

    static removeSpaces(value: string) {
        return value.replace(/\s+/g, "");
    }

    static escape(value: string) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    static allowSpacesBetweenCharacters(value: string) {
        return value
            .split("")
            .map((char) => `${RegExpBuilder.escape(char)}\\s*`)
            .join("")
            .slice(0, -3);
    }

    private addTransformation(transformation: (value: string) => string) {
        this.transformations.push(transformation);
        return this;
    }

    removeAccents() {
        return this.addTransformation(RegExpBuilder.removeAccents);
    }

    lowerCase() {
        return this.addTransformation(RegExpBuilder.lowerCase);
    }

    upperCase() {
        return this.addTransformation(RegExpBuilder.upperCase);
    }

    trim() {
        return this.addTransformation(RegExpBuilder.trim);
    }

    removeSpaces() {
        return this.addTransformation(RegExpBuilder.removeSpaces);
    }

    escape() {
        this.escaped = true;
        return this;
    }

    allowSpacesBetweenCharacters() {
        this.spacesBetweenCharactersAllowed = true;
        return this;
    }

    sanitize(transformation: (value: string) => string) {
        return this.addTransformation(transformation);
    }

    setFlags(flags: string) {
        this.flags = flags;
        return this;
    }

    build(operator: "and" | "or" = "or") {
        const transformations = this.transformations.slice();

        if (this.spacesBetweenCharactersAllowed) {
            transformations.push((value: string) => {
                return value
                    .split("")
                    .map((char) => `${this.escaped ? RegExpBuilder.escape(char) : char}\\s*`)
                    .join("")
                    .slice(0, -3);
            });
        } else if (this.escaped) {
            transformations.splice(0, 0, RegExpBuilder.escape);
        }

        const transformed = this.values.map((value) => {
            for (const transformation of transformations) {
                value = transformation(value);
            }
            return value;
        });

        const regex =
            operator === "and"
                ? `(?=.*${transformed.join(")(?=.*")})`
                : `(${transformed.join("|")})`;
        return new RegExp(regex, this.flags);
    }
}
