import { useEffect, useState } from "react";

import { Meal } from "@/classes/Meal";

export const useMealFavorite = (meal: Meal) => {
    const [isFavorite, setIsFavorite] = useState(meal.isFavorite);

    useEffect(() => {
        setIsFavorite(meal.isFavorite);
    }, [meal]);

    const handleToggleFavorite = (isFavorite: boolean) => {
        setIsFavorite(isFavorite);
        meal.isFavorite = isFavorite;
    }

    return { isFavorite, handleToggleFavorite };
};
