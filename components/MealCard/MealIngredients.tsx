import { StyleSheet } from "react-native";

import { Meal } from "@/classes/meal";
import HighlightText from "../HighlightText";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";

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
    ...globalStyles.regular,
    color: colors.light.textSecondary,
    fontSize: 14,
  },
});

export default MealIngredients;
