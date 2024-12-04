import { View, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

export interface MealDescriptionProps extends PropsWithChildren {}

const MealDescription = ({ children }: MealDescriptionProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default MealDescription;
