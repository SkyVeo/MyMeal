import { ImageBackground, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";

const WIDTH = Dimensions.get("window").width;

export interface MealBackgroundProps extends PropsWithChildren {
  image?: ImageSourcePropType;
}

const MealBackground = ({ image, children }: MealBackgroundProps) => {
  return (
    <ImageBackground style={styles.container} source={image}>
      <LinearGradient colors={["#b9b39c", "transparent"]} style={styles.gradient} />
      {children}
      <LinearGradient colors={["transparent", "#b9b39c"]} style={styles.gradient} />
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
});

export default MealBackground;
