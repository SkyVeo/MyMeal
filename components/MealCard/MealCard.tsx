import { StyleSheet, Pressable, View, Dimensions } from "react-native";

import { Meal } from "@/classes/Meal";
import { useMealFavorite } from "./MealCard.hooks";
import MealIngredients from "./MealIngredients";
import MealDuration from "./MealDuration";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { globalStyles } from "@/constants/styles";
import MealLegend from "./MealLegend";
import MealTitle from "./MealTitle";
import MealFooter from "./MealFooter";
import { colors } from "@/constants/colors";
import { HighlightTextProps } from "../HighlightText";
import { memo } from "react";
import Icon from "../Icon";
import { Image } from "expo-image";

export interface MealCardProps {
  meal: Meal;
  searchWords?: HighlightTextProps["searchWords"];
  width?: number;
}

const FAVORITE_ICON_GAP = 5;
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

        {/* <MealFooter> */}
        {meal.duration !== undefined && <MealDuration duration={meal.duration} />}
        {/* <FavoriteButton favorite={isFavorite} onPress={handleToggleFavorite} /> */}
        {/* </MealFooter> */}
      </MealLegend>
      {/* // TODO think about where to put the favorite icon */}
      {meal.isFavorite && (
        <Icon style={styles.favoriteIcon} name="star" size={24} color="#FFD700" />
      )}
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
  favoriteIcon: {
    position: "absolute",
    top: FAVORITE_ICON_GAP,
    left: FAVORITE_ICON_GAP,
  },
});

export default MealCard;
