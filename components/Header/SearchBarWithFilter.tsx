import { StyleSheet, View } from "react-native";

import SearchBar from "../SearchBar";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import FilterButton, { FilterButtonProps } from "./FilterButton";

export interface SearchBarWithFilterProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: FilterButtonProps["onPress"];
}

const HEIGHT = 50;

const SearchBarWithFilter = ({ value, onChangeText, onFilterPress }: SearchBarWithFilterProps) => {
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        textInputStyle={styles.textInput}
        placeholder="Meal, ingredients..."
        placeholderTextColor={colors.light.textSecondary}
        value={value}
        onChangeText={onChangeText}
        searchIcon={{ color: colors.light.textSecondary }}
        cancelIcon={{ color: colors.light.textSecondary }}
        selectionColor={colors.light.highlight}
        cursorColor={colors.light.backgroundTertiary}
        selectionHandleColor={colors.light.backgroundTertiary}
      />
      <FilterButton containerStyle={styles.filterButtonContainer} onPress={onFilterPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: colors.light.tint,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: HEIGHT,
  },
  textInput: {
    ...globalStyles.regular,
    fontSize: 16,
  },
  filterButtonContainer: {
    height: HEIGHT,
    width: HEIGHT,
  }
});

export default SearchBarWithFilter;
