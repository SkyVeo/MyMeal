import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "@/components/Icon";
import { colors } from "@/constants/colors";

export interface MenuItemProps {
  label?: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const MenuItem = ({ label, isSelected, onPress }: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, isSelected && styles.selected]}>{label}</Text>
      <Icon style={[styles.icon, isSelected ? styles.selected : { color: "transparent" }]} name="check" size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  text: {
    includeFontPadding: false,
    textAlignVertical: "center",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  selected: {
    color: colors.dark.tabIconSelected,
  },
  icon: {
    marginLeft: 16,
  },
});

export default MenuItem;
