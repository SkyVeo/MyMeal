import { View, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

export interface MealLegendProps extends PropsWithChildren {}

const GAP = 10;

const MealLegend = ({ children }: MealLegendProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: GAP,
    gap: GAP,
  },
});

export default MealLegend;
