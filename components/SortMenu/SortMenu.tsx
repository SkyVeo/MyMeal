import { View, StyleSheet } from "react-native";

import { SortOption } from "@/app/(tabs)";
import SortSelector from "./SortSelector";
import Separator from "./Separator";
import SortOrderToggle from "./SortOrderToggle";

export interface SortMenuProps {
  sortOptions?: SortOption[];
  activeSortIndex?: number;
  onChangeSortIndex?: (index: number) => void;
  isAscending?: boolean;
  onToggleSortOrder?: (isAscending: boolean) => void;
}

const SortMenu = ({
  sortOptions,
  activeSortIndex,
  onChangeSortIndex,
  isAscending,
  onToggleSortOrder,
}: SortMenuProps) => {
  return (
    <View style={styles.container}>
      <SortSelector sortOptions={sortOptions} activeSortIndex={activeSortIndex} onChangeSortIndex={onChangeSortIndex} />
      <Separator />
      <SortOrderToggle isAscending={isAscending} onToggle={onToggleSortOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
});

export default SortMenu;
