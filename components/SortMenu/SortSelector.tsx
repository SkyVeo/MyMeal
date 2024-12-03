import { View, Text, StyleSheet } from "react-native";

import { SortOption } from "@/app/(tabs)";
import PopupMenu from "@/components/PopupMenu";
import Icon from "@/components/Icon";

export interface SortSelectorProps {
  sortOptions?: SortOption[];
  activeSortIndex?: number;
  onChangeSortIndex?: (index: number) => void;
}

const SortSelector = ({ sortOptions = [], activeSortIndex, onChangeSortIndex }: SortSelectorProps) => {
  const getPopupItems = () => {
    return sortOptions.map((option, index) => ({ label: option.label, value: index }));
  };

  return (
    <PopupMenu
      items={getPopupItems()}
      selectedItemIndex={activeSortIndex}
      onPressItem={(item) => onChangeSortIndex?.(item.value)}
    >
      <View style={styles.container}>
        <Icon name="sort" size={20} color={COLOR_TEXT} />
        <Text style={styles.label}>
          {activeSortIndex !== undefined && activeSortIndex >= 0 && activeSortIndex < sortOptions.length
            ? sortOptions[activeSortIndex].label
            : "Sort"}
        </Text>
      </View>
    </PopupMenu>
  );
};

const COLOR_TEXT = "#a0d6c8";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  label: {
    marginLeft: 5,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: COLOR_TEXT,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});

export default SortSelector;
