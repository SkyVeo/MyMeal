import { StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

import { colors } from "@/constants/colors";
import Icon from "../Icon";

export interface FilterButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: TouchableOpacityProps["onPress"];
}

const FilterButton = ({ containerStyle, onPress }: FilterButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
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
