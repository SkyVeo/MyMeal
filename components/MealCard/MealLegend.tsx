import { View, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

export interface MealLegendProps extends PropsWithChildren {}

const MealLegend = ({ children }: MealLegendProps) => {
  return <View style={styles.container}>{children}</View>;
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
});

export default MealLegend;
