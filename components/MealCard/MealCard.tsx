import { StyleSheet, Pressable, Image, View, Dimensions } from "react-native";

import { Meal } from "@/classes/meal";
import { useMealFavorite } from "./MealCard.hooks";
import MealIngredients from "./MealIngredients";
import MealDuration from "./MealDuration";
import FavoriteButton from "../FavoriteButton";
import { globalStyles } from "@/constants/styles";
import MealLegend from "./MealLegend";
import MealTitle from "./MealTitle";
import MealFooter from "./MealFooter";
import { colors } from "@/constants/colors";

interface FlatListValues {
  margin?: number;
  gap?: number;
  numColumns?: number;
}

export interface MealCardProps {
  meal: Meal;
  searchWords?: string[];
  flatListValues?: FlatListValues;
}

const BORDER_RADIUS = 15;
const WIDTH = Dimensions.get("window").width;

const getImageSize = ({ margin = 0, gap = 0, numColumns = 1 }: FlatListValues) => {
  const margins = 2 * margin;
  const gaps = (numColumns - 1) * gap;
  const imageSize = (WIDTH - margins - gaps) / numColumns;

  return imageSize;
};

const MealCard = ({ meal, searchWords = [], flatListValues = {} }: MealCardProps) => {
  const imageSize = getImageSize(flatListValues);
  const { isFavorite, handleToggleFavorite } = useMealFavorite(meal);

  const handlePress = () => {
    console.log(`Pressed ${meal.title}`);
  };

  return (
    <Pressable style={{ ...styles.container, maxWidth: imageSize }} onPress={handlePress}>
      <Image style={{ ...styles.image, height: imageSize }} source={meal.image} />

      <MealLegend>
        <View>
          <MealTitle title={meal.title} searchWords={searchWords} />
          <MealIngredients meal={meal} searchWords={searchWords} />
        </View>

        <MealFooter>
          {meal.duration !== undefined && <MealDuration duration={meal.duration} />}
          <FavoriteButton favorite={isFavorite} onPress={handleToggleFavorite} />
        </MealFooter>
      </MealLegend>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
    flex: 1,
    backgroundColor: colors.light.background,
    borderRadius: BORDER_RADIUS,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});

export default MealCard;
