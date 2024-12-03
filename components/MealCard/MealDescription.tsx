import { View, StyleSheet } from "react-native";

import { Meal } from "@/classes/meal";
import MealIngredients from "./MealIngredients";
import MealDate from "./MealDate";
import MealDuration from "./MealDuration";

export interface MealDescriptionProps {
  meal: Meal;
  searchWords?: string[];
}

const MealDescription = ({ meal, searchWords }: MealDescriptionProps) => {
  return (
    <View style={styles.container}>
      <MealDate creationDate={meal.creationDate} />
      <View style={styles.ingredientsContainer}>
        <MealIngredients meal={meal} searchWords={searchWords} />
      </View>
      {meal.duration !== undefined && <MealDuration duration={meal.duration} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ingredientsContainer: {
    flex: 1,
  },
});

export default MealDescription;
