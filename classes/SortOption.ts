import { Meal } from "./Meal";

export class SortOption {
    label: string;
    compare: (a: Meal, b: Meal, isAscending: boolean) => number;

    constructor(label: string, compare: (a: Meal, b: Meal, isAscending: boolean) => number) {
        this.label = label;
        this.compare = compare;
    }

    static compare<T>(
        a: T | undefined,
        b: T | undefined,
        compareFunction: (a: T, b: T) => number,
        isAscending: boolean = true,
    ) {
        if (a === undefined && b === undefined) {
            return 0;
        }
        if (a === undefined) {
            return 1;
        }
        if (b === undefined) {
            return -1;
        }
        return (isAscending ? 1 : -1) * compareFunction(a, b);
    }

    static tieBreaker(a: Meal, b: Meal, isAscending: boolean) {
        return SortOption.compare(a.title, b.title, (a, b) => a.localeCompare(b), isAscending);
    }
}
