import { StyleSheet, Pressable } from "react-native";

import { Meal } from "@/classes/Meal";
import MealBackground from "./MealBackground";
import { useMealFavorite } from "./MealCard.hooks";
import MealLegend from "./MealLegend";
import HighlightText from "../../components/HighlightText";
import MealDescription from "./MealDescription";
import MealDate from "./MealDate";
import MealIngredients from "./MealIngredients";
import MealDuration from "./MealDuration";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { globalStyles } from "@/constants/styles";

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
      <MealBackground image={meal.image}>
        <FavoriteButton style={styles.favoriteButton} favorite={isFavorite} onPress={handleToggleFavorite} />
      </MealBackground>

      <MealLegend>
        <HighlightText textStyle={styles.title} text={meal.title} searchWords={searchWords} ignoreTextSpaces />
        <MealDescription>
          <MealDate creationDate={meal.creationDate} />
          <MealIngredients meal={meal} searchWords={searchWords} />
          {meal.duration !== undefined && <MealDuration duration={meal.duration} />}
        </MealDescription>
      </MealLegend>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9b39c",
    paddingTop: 10,
  },
  title: {
    ...globalStyles.bold,
    textAlign: "center",
    fontSize: 25,
  },
  ingredientsContainer: {
    flex: 1,
  },
  favoriteButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
    backgroundColor: "#ececdd",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
});

export default MealCard;
