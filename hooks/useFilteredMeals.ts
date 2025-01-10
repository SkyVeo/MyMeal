import { useMemo } from "react";

import { Meal } from "@/classes/Meal";
import { Tag } from "@/classes/Tag";
import { removeSpaces, removeAccents } from "@/utils/formatText";

export const useFilteredMeals = (meals: Meal[], searchWords: string[], selectedTags: Tag[] = []) => {
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
            .sort((a, b) => a.title.localeCompare(b.title));
    }, [meals, searchWords, selectedTags]);

    return { filteredMeals };
};
