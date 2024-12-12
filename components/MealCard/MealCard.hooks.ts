import { useEffect, useState } from "react";

import { Meal } from "@/classes/meal";

export const useMealFavorite = (meal: Meal) => {
    // TODO useMemo
    const [isFavorite, setIsFavorite] = useState(meal.isFavorite);

    useEffect(() => {
        setIsFavorite(meal.isFavorite);
    }, [meal]);

    const handleToggleFavorite = (isFavorite: boolean) => {
        setIsFavorite(isFavorite);
        meal.toggleFavorite();
    }

    return { isFavorite, handleToggleFavorite };
};
