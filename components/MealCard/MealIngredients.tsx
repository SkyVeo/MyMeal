import { StyleSheet, Text } from "react-native";
import React from "react";

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
  const ingredientsCountText = `${meal.ingredients.length} ingredient${meal.ingredients.length > 1 ? "s" : ""}`;

  return (
    <Text style={styles.ingredients}>
      {ingredientsCountText}
      <HighlightText
        textToHighlight={meal.ingredientsToString(searchWords)}
        searchWords={searchWords}
        sanitize={RegExpBuilder.removeAccents}
      />
    </Text>
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
