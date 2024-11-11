import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icon";
import Header from "@/components/Header";
import { HighlightText } from "@/components/HighlightText";
import { Meal } from "@/classes/meal";

const meals: Meal[] = [
  new Meal("Pizza prosciutto")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ham")
    .addCreationDate("2021-01-01")
    .addCookingTime(15),
  new Meal("Spaghetti carbonara")
    .addIngredients("Spaghetti", "Egg", "Guanciale", "Pecorino")
    .addCreationDate("2021-01-02")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Tiramisù")
    .addIngredients("Egg", "Sugar", "Mascarpone", "Coffee")
    .addCreationDate("2021-01-03")
    .addPrepTime(30)
    .addCookingTime(0),
  new Meal("Lasagna")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ragù")
    .addCreationDate("2021-01-04")
    .addPrepTime(30)
    .addCookingTime(30),
  new Meal("Cacio e pepe")
    .addIngredients("Spaghetti", "Pecorino", "Black pepper")
    .addCreationDate("2021-01-05")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Fries")
    .addIngredients("Potatoes", "Salt", "Oil")
    .addCreationDate("2021-01-06")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Hamburger")
    .addIngredients("Bread", "Meat", "Lettuce", "Tomato")
    .addCreationDate("2021-01-07")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Hot dog")
    .addIngredients("Bread", "Sausage", "Ketchup", "Mustard")
    .addCreationDate("2021-01-08")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Caesar salad")
    .addIngredients("Lettuce", "Chicken", "Bread", "Parmesan")
    .addCreationDate("2021-01-09")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Caprese")
    .addIngredients("Tomato", "Mozzarella", "Basil", "Oil")
    .addCreationDate("2021-01-10")
    .addPrepTime(10)
    .addCookingTime(0),
  new Meal("Pasta al pesto")
    .addIngredients("Pasta", "Basil", "Pine nuts", "Parmesan")
    .addCreationDate("2021-01-11")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Pasta alla norma")
    .addIngredients("Pasta", "Tomato", "Eggplant", "Ricotta")
    .addCreationDate("2021-01-12")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Pasta alla puttanesca")
    .addIngredients("Pasta", "Tomato", "Olives", "Capers")
    .addCreationDate("2021-01-13")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Zuppa di ceci")
    .addIngredients("Chickpeas", "Tomato", "Bread", "Oil")
    .addCreationDate("2021-01-14")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("* \\ + \\d \\s").addIngredients("* \\ + \\d", "Tomato", "Bread", "Oil").addCreationDate("2021-01-15"),
  new Meal("All'Amatriciana")
    .addIngredients("Pasta", "Tomato", "Guanciale", "Pecorino")
    .addCreationDate("2021-01-16")
    .addCookingTime(10),
  new Meal("Pizza margherita")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Basil")
    .addCreationDate("2021-01-17")
    .addPrepTime(30)
    .addCookingTime(15),
  new Meal("Pizza quattro stagioni")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives")
    .addCreationDate("2021-01-18")
    .addPrepTime(30),
];

function compare<T>(
  a: T | undefined,
  b: T | undefined,
  compareFunction: (a: T, b: T) => number,
  isAscending: boolean = true
) {
  if (a === undefined && b === undefined) {
    return 0;
  }
  if (a === undefined) {
    return 1;
  }
  if (b === undefined) {
    return -1;
  }
  return (isAscending ? 1 : -1) * compareFunction(a, b);
}

const tieBreaker = (a: Meal, b: Meal, isAscending: boolean) => {
  return compare(a.title, b.title, (a, b) => a.localeCompare(b), isAscending);
};

export interface SortOption {
  label: string;
  sortFunction: (a: Meal, b: Meal, isAscending: boolean) => number;
}

export type SortOptions = "name" | "ingredientsCount" | "creationDate" | "duration";

const sortOptions: { [key in SortOptions]: SortOption } = {
  name: {
    label: "Name",
    sortFunction: tieBreaker,
  },
  ingredientsCount: {
    label: "Ingredients",
    sortFunction: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.ingredients.length, b.ingredients.length, (a, b) => a - b, isAscending) ||
      tieBreaker(a, b, isAscending),
  },
  creationDate: {
    label: "Creation date",
    sortFunction: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.creationDate, b.creationDate, (a, b) => a.localeCompare(b), isAscending) ||
      tieBreaker(a, b, isAscending),
  },
  duration: {
    label: "Duration",
    sortFunction: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.duration, b.duration, (a, b) => a - b, isAscending) || tieBreaker(a, b, isAscending),
  },
};

export default function Meals() {
  const [query, setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ option: SortOption; isAscending: boolean }>({
    option: sortOptions.name,
    isAscending: true,
  });

  const getSearchWords = () => query.split(" ").filter((word) => word.length > 0);

  const getFilteredMeals = () => {
    return meals
      .filter((item) =>
        getSearchWords().every(
          (word) => contains(item.title.replace(/\s+/g, ""), word) || contains(item.ingredients.join(""), word)
        )
      )
      .sort((a, b) => sortConfig.option.sortFunction(a, b, sortConfig.isAscending));
  };

  const contains = (text: string, searchString: string) => {
    return text.toLowerCase().includes(searchString.toLowerCase());
  };

  const renderMeal = ({ item }: { item: Meal }) => {
    return (
      <View style={styles.mealContainer}>
        {/* <Text style={styles.mealTitle}>{item.title}</Text> */}
        <HighlightText textStyle={styles.mealTitle} text={item.title} searchWords={getSearchWords()} ignoreTextSpaces />
        <HighlightText
          textStyle={styles.mealDescription}
          text={item.ingredients.join(", ")}
          searchWords={getSearchWords()}
          ignoreTextSpaces
        />
        <Text style={styles.mealDescription}>{item.duration} min</Text>
        {/* <Text style={styles.mealDescription}>{item.ingredients.join(", ")}</Text> */}
        {/* {ingredientsCountains(item.ingredients, query) && <Text style={styles.mealDescription}>{item.ingredients.join(", ")}</Text>} */}
        {/* <Text style={styles.mealDescription}>{item.description}</Text> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: Dimensions.get("window").height - 64,
        }}
      >
        <Header
          searchValue={query}
          onChangeText={setQuery}
          sortText={sortConfig.option.label}
          sortOptions={Object.values(sortOptions).map((option) => ({ caption: option.label, value: option }))}
          selectedSortOptionIndex={Object.values(sortOptions).indexOf(sortConfig.option)}
          onSetSortOption={(option) => setSortConfig({ ...sortConfig, option })}
          isAscending={sortConfig.isAscending}
          onChangeSortOrder={(isAscending) => setSortConfig({ ...sortConfig, isAscending })}
        />
        <FlatList
          data={getFilteredMeals()}
          renderItem={renderMeal}
          ListEmptyComponent={<EmptyState title="No Meal Found" subtitle="Whoops!" />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  greenBackground: {
    height: 180,
    backgroundColor: colors.dark.background,
  },
  whiteBackground: {
    flex: 3,
    backgroundColor: "#f6f6f6",
  },
  headerContainer: {
    marginVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    includeFontPadding: false,
    textAlignVertical: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  mealContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.dark.border,
  },
  mealTitle: {
    includeFontPadding: false,
    color: colors.dark.text,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  mealDescription: {
    includeFontPadding: false,
    color: colors.dark.secondaryText,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  highlighted: {
    backgroundColor: "yellow",
  },
});
