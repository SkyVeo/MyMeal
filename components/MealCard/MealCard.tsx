import { StyleSheet, Pressable, View } from "react-native";

import { Meal } from "@/classes/Meal";
import MealIngredients from "./MealIngredients";
import MealDuration from "./MealDuration";
import { globalStyles } from "@/constants/styles";
import MealLegend from "./MealLegend";
import MealTitle from "./MealTitle";
import MealFooter from "./MealFooter";
import { colors } from "@/constants/colors";
import { HighlightTextProps } from "../HighlightText";
import { memo } from "react";
import { Image } from "expo-image";
import MealFavoriteIcon from "./MealFavoriteIcon";

export interface MealCardProps {
  meal: Meal;
  searchWords?: HighlightTextProps["searchWords"];
  width?: number;
}

const BORDER_RADIUS = 15;

const MealCard = memo(({ meal, searchWords = [], width }: MealCardProps) => {
  const handlePress = () => {
    console.log(`Pressed ${meal.title}`);
  };

  return (
    <Pressable style={{ ...styles.container, width }} onPress={handlePress}>
      <Image style={styles.image} source={meal.image} />

      <MealLegend>
        <View>
          <MealTitle title={meal.title} searchWords={searchWords} />
          <MealIngredients meal={meal} searchWords={searchWords} />
        </View>

        <MealFooter>
          {meal.duration !== undefined && <MealDuration duration={meal.duration} />}
          {meal.isFavorite && <MealFavoriteIcon />}
        </MealFooter>
      </MealLegend>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
    backgroundColor: colors.light.background,
    borderRadius: BORDER_RADIUS,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});

export default MealCard;
