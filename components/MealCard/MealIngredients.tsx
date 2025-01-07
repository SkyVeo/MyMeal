import { StyleSheet } from "react-native";

import { Meal } from "@/classes/Meal";
import HighlightText, { HighlightTextProps } from "../HighlightText";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";
import { RegExpBuilder } from "@/classes/RegExpBuilder";

export interface MealIngredientsProps {
  meal: Meal;
  searchWords?: HighlightTextProps["searchWords"];
}

const MealIngredients = ({ meal, searchWords }: MealIngredientsProps) => {
  return (
    <HighlightText
      textStyle={styles.ingredients}
      textToHighlight={meal.ingredientsToString()}
      searchWords={searchWords}
      sanitize={RegExpBuilder.removeAccents}
      numberOfLines={2}
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
