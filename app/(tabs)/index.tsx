import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import Header from "@/components/Header/Header";
import SearchBarWithFilter from "@/components/Header/SearchBarWithFilter";
import Title from "@/components/Header/Title";
import { StatusBar } from "expo-status-bar";
import { meals } from "@/constants/meals";
import TagList from "@/components/TagList/TagList";
import MealList from "@/components/MealList";
import { tags } from "@/constants/tags";
import { useQuery } from "@/hooks/useQuery";
import { useTags } from "@/hooks/useTags";
import { useFilteredMeals } from "@/hooks/useFilteredMeals";

const Meals = () => {
  const { query, setQuery, searchWords, highlightPatterns } = useQuery();
  const { sortedTags, selectedTags, handleTagPress } = useTags(tags);
  const { filteredMeals } = useFilteredMeals(meals, searchWords, selectedTags);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Header>
        <Title>My Meals</Title>
        <SearchBarWithFilter value={query} onChangeText={setQuery} />
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
