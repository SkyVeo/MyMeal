import { useMemo } from "react";

import { Meal } from "@/classes/Meal";
import { Tag } from "@/classes/Tag";
import { removeSpaces, removeAccents } from "@/utils/formatText";
import { SortOption } from "@/classes/SortOption";
import { defaultSortOption } from "@/constants/sortOptions";

export const useFilteredMeals = (
    meals: Meal[],
    searchWords: string[],
    selectedTags: Tag[] = [],
    sortOption: SortOption = defaultSortOption,
    isAscending: boolean = true
) => {
    const contains = (text: string, searchString: string) => {
        return removeSpaces(removeAccents(text).toLowerCase()).includes(searchString.toLowerCase());
    };

    const filteredMeals = useMemo(() => {
        return meals
            .filter(
                (item) =>
                    searchWords.every(
                        (word) =>
                            contains(item.title, word) ||
                            item.ingredients.some((ingredient) => contains(ingredient, word))
                    ) && selectedTags.every((tag) => item.tags.includes(tag))
            )
            .sort((a, b) => sortOption.compare(a, b, isAscending));
    }, [meals, searchWords, selectedTags, sortOption, isAscending]);

    return { filteredMeals };
};
