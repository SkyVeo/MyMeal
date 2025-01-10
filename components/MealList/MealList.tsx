import React, { useCallback } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { Meal } from "@/classes/Meal";
import MealCard from "../MealCard";
import { HighlightTextProps } from "../HighlightText";
import { useMealList } from "./MealList.hooks";

export interface MealListProps {
  meals?: Meal[];
  searchWords?: HighlightTextProps["searchWords"];
}

const GAP = 10;
const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get("window").width;
const MEAL_CARD_WIDTH = (SCREEN_WIDTH - (NUM_COLUMNS + 1) * GAP) / NUM_COLUMNS;

const MealList = ({ meals, searchWords }: MealListProps) => {
  const { flatListRef } = useMealList();

  const renderMeal = useCallback(
    ({ item }: { item: Meal }) => <MealCard meal={item} searchWords={searchWords} width={MEAL_CARD_WIDTH} />,
    [searchWords]
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={meals}
        renderItem={renderMeal}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.columnWrapper}
        maxToRenderPerBatch={4}
        initialNumToRender={1}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    margin: GAP,
    gap: GAP,
  },
});

export default MealList;
