import { View, StyleSheet } from "react-native";

import HighlightText from "../HighlightText";
import { Meal } from "@/classes/meal";
import MealDescription from "./MealDescription";

export interface MealLegendProps {
  meal: Meal;
  searchWords?: string[];
}

const MealLegend = ({ meal, searchWords }: MealLegendProps) => {
  return (
    <View style={styles.container}>
      <HighlightText textStyle={styles.title} text={meal.title} searchWords={searchWords} ignoreTextSpaces />
      <MealDescription meal={meal} searchWords={searchWords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ececdd",
    position: "relative",
    top: -10,
    marginHorizontal: 10,
    padding: 10,
    gap: 10,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  title: {
    includeFontPadding: false,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins-Bold",
  },
});

export default MealLegend;
