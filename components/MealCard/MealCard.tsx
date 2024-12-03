import { StyleSheet, Pressable } from "react-native";

import { Meal } from "@/classes/meal";
import MealBackground from "./MealBackground";
import { useMealFavorite } from "./MealCard.hooks";
import MealLegend from "./MealLegend";

export interface MealCardProps {
  meal: Meal;
  searchWords?: string[];
}

const MealCard = ({ meal, searchWords = [] }: MealCardProps) => {
  const { isFavorite, handleToggleFavorite } = useMealFavorite(meal);

  const handlePress = () => {
    console.log(`Pressed ${meal.title}`);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <MealBackground image={meal.image} favorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
      <MealLegend meal={meal} searchWords={searchWords} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9b39c",
    paddingTop: 10,
  },
});

export default MealCard;
