import { View, Text, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icon";
// import Header from "@/components/Header";
import HighlightText from "@/components/HighlightText";
import { Meal } from "@/classes/meal";
import PopupMenu from "@/components/PopupMenu";
import SortMenu from "@/components/SortMenu";
import MealCard from "@/components/MealCard/MealCard";
import Touchable from "@/components/Touchable";
import { images } from "@/constants/images";
import Header from "@/components/Header/Header";

const meals: Meal[] = [
  new Meal("Pizza prosciutto")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ham")
    .addCreationDate("2021-01-01")
    .addTags("Pizza", "Italian")
    .addCookingTime(15)
    .addImage(images.pizza),
  new Meal("Spaghetti carbonara")
    .addIngredients("Spaghetti", "Egg", "Guanciale", "Pecorino")
    .addCreationDate("2021-01-02")
    .addTags("Pasta", "Italian")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Tiramisù")
    .addIngredients("Egg", "Sugar", "Mascarpone", "Coffee")
    .addCreationDate("2021-01-03")
    .addTags("Dessert", "Italian")
    .addPrepTime(30)
    .addCookingTime(0),
  new Meal("Lasagna")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ragù")
    .addCreationDate("2021-01-04")
    .addTags("Pasta", "Italian", "Garfield")
    .addPrepTime(30)
    .addCookingTime(30),
  new Meal("Cacio e pepe")
    .addIngredients("Spaghetti", "Pecorino", "Black pepper")
    .addCreationDate("2021-01-05")
    .addTags("Pasta", "Italian")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Fries")
    .addIngredients("Potatoes", "Salt", "Oil")
    .addCreationDate("2021-01-06")
    .addTags("Belgian")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Hamburger")
    .addIngredients("Bread", "Meat", "Lettuce", "Tomato")
    .addCreationDate("2021-01-07")
    .addTags("Cheat meal")
    .addPrepTime(10)
    .addCookingTime(10)
    .addImage(images.hamburger),
  new Meal("Hot dog")
    .addIngredients("Bread", "Sausage", "Ketchup", "Mustard")
    .addCreationDate("2021-01-08")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Caesar salad")
    .addIngredients("Lettuce", "Chicken", "Bread", "Parmesan")
    .addCreationDate("2021-01-09")
    .addTags("Healthy")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Caprese")
    .addIngredients("Tomato", "Mozzarella", "Basil", "Oil")
    .addCreationDate("2021-01-10")
    .addTags("Healthy")
    .addPrepTime(10)
    .addCookingTime(0),
  new Meal("Pasta al pesto")
    .addIngredients("Pasta", "Basil", "Pine nuts", "Parmesan")
    .addCreationDate("2021-01-11")
    .addTags("Pasta", "Italian"),
  new Meal("Pasta alla norma")
    .addIngredients("Pasta", "Tomato", "Eggplant", "Ricotta")
    .addCreationDate("2021-01-12")
    .addTags("Pasta", "Italian")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Pasta alla puttanesca")
    .addIngredients("Pasta", "Tomato", "Olives", "Capers")
    .addCreationDate("2021-01-13")
    .addTags("Pasta", "Italian")
    .addPrepTime(10)
    .addCookingTime(10),
  new Meal("Zuppa di ceci")
    .addIngredients("Chickpeas", "Tomato", "Bread", "Oil")
    .addCreationDate("2021-01-14")
    .addTags("Soup", "Italian"),
  new Meal("* \\ + \\d \\s")
    .addIngredients("* \\ + \\d", "Tomato", "Bread", "Oil")
    .addCreationDate("2021-01-15")
    .addImage(images.empty),
  new Meal("All'Amatriciana")
    .addIngredients("Pasta", "Tomato", "Guanciale", "Pecorino")
    .addCreationDate("2021-01-16")
    .addTags("Pasta", "Italian")
    .addCookingTime(10),
  new Meal("Pizza margherita")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Basil")
    .addCreationDate("2021-01-17")
    .addTags("Pizza", "Italian", "cheat")
    .addPrepTime(30)
    .addCookingTime(15)
    .addImage(images.pizza),
  new Meal("Pizza quattro stagioni")
    .addIngredients("Flour", "Tomato", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives")
    .addCreationDate("2021-01-18")
    .addTags("Pizza", "Italian", "meal")
    .addImage(images.pizza),
  new Meal("Burrito")
    .addIngredients("Tortilla", "Rice", "Beans", "Meat", "Salsa")
    .addCreationDate("2021-01-19")
    .addTags("Mexican", "meal")
    .addPrepTime(90),
  new Meal("Tacos")
    .addIngredients("Tortilla", "Meat", "Salsa", "Guacamole")
    .addTags("Mexican", "meal")
    .addPrepTime(120),
  new Meal("Ham sandwich").addIngredients("Bread", "Ham").addImage(images.sandwich),
  new Meal("Tomato soup")
    .addIngredients(
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato",
      "Tomato"
    )
    .addCookingTime(60000),
  new Meal("Pâtes bolognaise")
    .addIngredients("Pâtes", "Tomate", "Viande hachée", "Oignon", "Ail")
    .addCreationDate("2021-01-20")
    .addTags("Pâtes", "Italien")
    .addCookingTime(10)
    .addImage(images.bolognese),
  new Meal(
    "Pâté of roasted indigenous legumes, paired with a compote of seasonal berries, served on hearty sprouted wheat bread"
  )
    .addIngredients(
      "Pâté",
      "Roasted",
      "Indigenous",
      "Legumes",
      "Compote",
      "Seasonal",
      "Berries",
      "Sprouted",
      "Wheat",
      "Bread"
    )
    .addCreationDate("2021-01-21")
    .addTags(
      "Pâté",
      "Roasted",
      "Indigenous",
      "Legumes",
      "Compote",
      "Seasonal",
      "Berries",
      "Sprouted",
      "Wheat",
      "Bread"
    ),
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
  compare: (a: Meal, b: Meal, isAscending: boolean) => number;
}

const sortOptions: SortOption[] = [
  {
    label: "Name",
    compare: (a: Meal, b: Meal, isAscending: boolean) => tieBreaker(a, b, isAscending),
  },
  {
    label: "Ingredients",
    compare: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.ingredients.length, b.ingredients.length, (a, b) => a - b, isAscending) ||
      tieBreaker(a, b, isAscending),
  },
  {
    label: "Creation date",
    compare: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.creationDate, b.creationDate, (a, b) => a.toISOString().localeCompare(b.toISOString()), isAscending) ||
      tieBreaker(a, b, isAscending),
  },
  {
    label: "Duration",
    compare: (a: Meal, b: Meal, isAscending: boolean) =>
      compare(a.duration, b.duration, (a, b) => a - b, isAscending) || tieBreaker(a, b, isAscending),
  },
];

export default function Meals() {
  const [query, setQuery] = useState("");
  const [sortOptionIndex, setSortOptionIndex] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const getSearchWords = () => query.split(" ").filter((word) => word.length > 0);

  const getFilteredMeals = () => {
    return meals
      .filter((item) =>
        getSearchWords().every(
          (word) =>
            contains(item.title, word) ||
            contains(item.ingredients.join(","), word) ||
            contains(item.tags.join(","), word)
        )
      )
      .sort((a, b) => {
        const aTitle = getSearchWords().some((word) => contains(a.title, word) || contains(a.tags.join(","), word));
        const bTitle = getSearchWords().some((word) => contains(b.title, word) || contains(b.tags.join(","), word));

        if (true) {
          return sortOptions[sortOptionIndex].compare(a, b, isAscending);
        }
        if (aTitle) {
          return -1;
        }
        if (bTitle) {
          return 1;
        }
        return sortOptions[sortOptionIndex].compare(a, b, isAscending);
      });
  };

  const contains = (text: string, searchString: string) => {
    return text.toLowerCase().replace(/\s+/g, "").includes(searchString.toLowerCase());
  };

  const renderMeal = ({ item }: { item: Meal }) => {
    return (
      <MealCard meal={item} searchWords={getSearchWords()} flatListValues={{ gap: 10, margin: 10, numColumns: 2 }} />
    );
  };

  const [showArrow, setShowArrow] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const arrowOpacity = useRef(new Animated.Value(100)).current;

  const handleScroll = (event: any) => {
    // const offsetY = event.nativeEvent.contentOffset.y;
    const offsetY = event.nativeEvent.contentOffset.y;
    // arrowOpacity.setValue(offsetY / 1000); // Fade in arrow as user scrolls down
    if (offsetY > 100 && !showArrow) {
      setShowArrow(true);
      Animated.timing(arrowOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (offsetY <= 100 && showArrow) {
      Animated.timing(arrowOpacity, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowArrow(false));
    }
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: Dimensions.get("window").height - 64,
        }}
      >
        <Header text={query} onChangeText={setQuery} />
        <FlatList
          ref={flatListRef}
          data={getFilteredMeals()}
          renderItem={renderMeal}
          ListEmptyComponent={<EmptyState title="No Meal Found" subtitle="Whoops!" />}
          ListHeaderComponent={
            <SortMenu
              sortOptions={sortOptions}
              activeSortIndex={sortOptionIndex}
              onChangeSortIndex={setSortOptionIndex}
              isAscending={isAscending}
              onToggleSortOrder={setIsAscending}
            />
          }
          onScroll={handleScroll}
          scrollEventThrottle={16}
          numColumns={2}
          columnWrapperStyle={{ margin: 10, gap: 10 }}
        />
        <Animated.View style={{ transform: [{ translateY: arrowOpacity }] }}>
          <TouchableOpacity onPress={scrollToTop} style={styles.arrowContainer}>
            <Icon name="up" size={30} color={TOP_COLOR} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const TOP_COLOR = "#fff";
const BOTTOM_COLOR = "#a0d6c8";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
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
    backgroundColor: "#f6f6f6",
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
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: colors.dark.background,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  bottomText: {
    includeFontPadding: false,
    textAlignVertical: "center",
    color: BOTTOM_COLOR,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  containerElement: {
    padding: 5,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: BOTTOM_COLOR,
    borderRadius: 25,
    padding: 10,
  },
});
