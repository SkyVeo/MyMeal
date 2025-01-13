import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList } from "react-native";

export const useScrollToTopList = <T>() => {
    const flatListRef = useRef<FlatList<T>>(null);
    useScrollToTop(flatListRef);

    return { flatListRef };
};
