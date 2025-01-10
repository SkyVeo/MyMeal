import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList } from "react-native";

import { Meal } from "@/classes/Meal";

export const useMealList = () => {
    const flatListRef = useRef<FlatList<Meal>>(null);
    useScrollToTop(flatListRef);

    return { flatListRef };
};
