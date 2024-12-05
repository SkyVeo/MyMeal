import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export interface MealFooterProps extends PropsWithChildren {}

const MealFooter = ({ children }: MealFooterProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default MealFooter;
