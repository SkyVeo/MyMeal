import { StyleSheet } from "react-native";

import { Meal } from "@/classes/Meal";
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
      searchValue={searchWords}
      allowSpacesBetweenCharacters
      ignoreAccents
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
