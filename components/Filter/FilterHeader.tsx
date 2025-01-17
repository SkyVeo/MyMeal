import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";

import sizes from "@/constants/sizes";

export interface FilterHeaderProps extends PropsWithChildren {}

const FilterHeader = ({ children }: FilterHeaderProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: sizes.modalPadding,
  },
});

export default FilterHeader;
