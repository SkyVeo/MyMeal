import { StyleSheet, View } from "react-native";

import { Meal } from "@/classes/meal";
import HighlightText from "../HighlightText";
import { textStyles } from "@/constants/styles";

export interface MealIngredientsProps {
  meal: Meal;
  searchWords?: string[];
}

const MealIngredients = ({ meal, searchWords }: MealIngredientsProps) => {
  return (
    <View style={styles.container}>
      <HighlightText
        textStyle={styles.ingredients}
        text={meal.ingredientsToString()}
        searchWords={searchWords}
        ignoreTextSpaces
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredients: {
    ...textStyles.regular,
    flex: 1,
    fontSize: 14,
  },
});

export default MealIngredients;
