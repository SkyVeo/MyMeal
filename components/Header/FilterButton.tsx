import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { colors } from "@/constants/colors";
import Icon from "../Icon";

export interface FilterButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const FilterButton = ({ containerStyle }: FilterButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Icon name="filter" size={20} color={colors.light.background}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.backgroundTertiary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterButton;
