import { FlatList, StyleSheet, View } from "react-native";

import { Meal } from "@/classes/meal";
import MealCard, { FlatListValues } from "../MealCard";

export interface MealListProps {
  meals?: Meal[];
  searchWords?: string[];
}

const GAP = 10;
const FLAT_LIST_VALUES: FlatListValues = {
  margin: GAP,
  gap: GAP,
  numColumns: 2,
};

const MealList = ({ meals, searchWords }: MealListProps) => {
  const renderMeal = ({ item }: { item: Meal }) => {
    return <MealCard meal={item} searchWords={searchWords} flatListValues={FLAT_LIST_VALUES} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        numColumns={FLAT_LIST_VALUES.numColumns}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    margin: FLAT_LIST_VALUES.margin,
    gap: FLAT_LIST_VALUES.gap,
  },
});

export default MealList;
