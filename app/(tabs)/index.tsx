import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getMeals } from "@/api-access/meal";
import FilterModal from "@/components/Filter/FilterModal";
import Header from "@/components/Header/Header";
import SearchBarWithFilter from "@/components/Header/SearchBarWithFilter";
import Title from "@/components/Header/Title";
import MealList from "@/components/MealList";
import TagList from "@/components/TagList/TagList";
import { colors } from "@/constants/colors";
import { tags } from "@/constants/tags";
import { useFilteredMeals } from "@/hooks/useFilteredMeals";
import { useModal } from "@/hooks/useModal";
import { useSearch } from "@/hooks/useSearch";
import { useSortOption } from "@/hooks/useSortOption";
import { useSelectedTags, useSortedTags } from "@/hooks/useTags";
import { useSuspenseQuery } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

// TODO add GAP in global constant
const Meals = () => {
  // TODO move all hooks to a separate file
  const { data: meals } = useSuspenseQuery({ queryKey: ["meals"], queryFn: getMeals });
  const { search, setSearch, searchWords, highlightPatterns } = useSearch();
  const { sortedTags } = useSortedTags(tags);
  const { selectedTags, setSelectedTags, handleTagPress } = useSelectedTags();
  const { sortOption, setSortOption, isAscending, setIsAscending } = useSortOption();
  const { filteredMeals } = useFilteredMeals(meals, searchWords, selectedTags, sortOption, isAscending);
  const { modalVisible, openModal, closeModal } = useModal();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <FilterModal
        visible={modalVisible}
        tags={sortedTags}
        selectedTags={selectedTags}
        sortOption={sortOption}
        isAscending={isAscending}
        onClose={closeModal}
        onApply={(newSelectedTags, newSortOption, newIsAscending) => {
          setSelectedTags(newSelectedTags);
          setSortOption(newSortOption);
          setIsAscending(newIsAscending);
        }}
      />

      <Header>
        <Title>My Meals</Title>
        <SearchBarWithFilter value={search} onChangeText={setSearch} onFilterPress={openModal} />
      </Header>

      <TagList tags={sortedTags} selectedTags={selectedTags} onPressTag={handleTagPress} />

      <MealList meals={filteredMeals} searchWords={highlightPatterns} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
});

export default Meals;
