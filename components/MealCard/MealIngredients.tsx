import { StyleSheet } from "react-native";

import { Meal } from "@/classes/meal";
import HighlightText from "../HighlightText";

export interface MealIngredientsProps {
  meal: Meal;
  searchWords?: string[];
}

const MealIngredients = ({ meal, searchWords }: MealIngredientsProps) => {
  return (
    <HighlightText
      textStyle={styles.ingredients}
      text={meal.ingredientsToString()}
      searchWords={searchWords}
      ignoreTextSpaces
    />
  );
};

const styles = StyleSheet.create({
  ingredients: {
    flex: 1,
    includeFontPadding: false,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});

export default MealIngredients;
