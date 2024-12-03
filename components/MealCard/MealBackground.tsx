import { ImageBackground, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FavoriteButton from "../FavoriteButton";

const WIDTH = Dimensions.get("window").width;

export interface MealBackgroundProps {
  image?: ImageSourcePropType;
  favorite?: boolean;
  onToggleFavorite?: (isFavorite: boolean) => void;
}

const MealBackground = ({ image, favorite, onToggleFavorite }: MealBackgroundProps) => {
  return (
    <ImageBackground style={styles.container} source={image}>
      <LinearGradient colors={["#b9b39c", "transparent"]} style={styles.gradient} />
      <LinearGradient colors={["transparent", "#b9b39c"]} style={styles.gradient} />
      <FavoriteButton style={styles.favoriteButton} favorite={favorite} onToggle={onToggleFavorite} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: WIDTH * 0.7,
    justifyContent: "space-between",
  },
  gradient: {
    height: 5,
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

export default MealBackground;
