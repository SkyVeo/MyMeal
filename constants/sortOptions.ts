import { SortOption } from "@/classes/SortOption";

export const sortOptions = [
    new SortOption("Name", (a, b, isAscending) => SortOption.tieBreaker(a, b, isAscending)),
    new SortOption(
        "Ingredients",
        (a, b, isAscending) =>
            SortOption.compare(a.ingredients.length, b.ingredients.length, (a, b) => a - b, isAscending) ||
            SortOption.tieBreaker(a, b, isAscending)
    ),
    new SortOption(
        "Creation date",
        (a, b, isAscending) =>
            SortOption.compare(
                a.creationDate,
                b.creationDate,
                (a, b) => a.toISOString().localeCompare(b.toISOString()),
                isAscending
            ) || SortOption.tieBreaker(a, b, isAscending)
    ),
    new SortOption(
        "Duration",
        (a, b, isAscending) =>
            SortOption.compare(a.duration, b.duration, (a, b) => a - b, isAscending) ||
            SortOption.tieBreaker(a, b, isAscending)
    ),
];
