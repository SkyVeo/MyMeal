import { StyleSheet } from "react-native";

import Icon from "@/components/Icon";

const COLOR_TEXT = "#a0d6c8";

export interface SortOrderToggleProps {
  isAscending?: boolean;
  onToggle?: (isAscending: boolean) => void;
}

const SortOrderToggle = ({ isAscending = true, onToggle }: SortOrderToggleProps) => {
  return (
    <Icon
      name={isAscending ? "arrowUp" : "arrowDown"}
      size={20}
      color={COLOR_TEXT}
      style={styles.toggleButton}
      onPress={() => onToggle?.(!isAscending)}
    />
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    padding: 5,
  },
});

export default SortOrderToggle;
