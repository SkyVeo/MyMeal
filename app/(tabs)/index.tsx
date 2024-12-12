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
import SearchBar from "@/components/SearchBar";
import { globalStyles } from "@/constants/styles";
import SearchBarWithFilter from "@/components/Header/SearchBarWithFilter";
import Title from "@/components/Header/Title";
import { StatusBar } from "expo-status-bar";
import Tag from "@/components/TagList";
import { meals } from "@/constants/meals";
import TagList from "@/components/TagList/TagList";

export function compare<T>(
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
      .filter(
        (item) =>
          getSearchWords().every(
            (word) => contains(item.title, word) || contains(item.ingredients.join(","), word)
            // contains(item.tags.join(","), word)
          ) && selectedTags.every((tag) => item.tags.includes(tag))
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

  const isTagSelected = (tag: string) => {
    return selectedTags.includes(tag);
  };

  const getFilterTags = () => {
    return tags.sort((a, b) => a.title.localeCompare(b.title));
  };

  const tags = [
    {
      emoji: "🍕",
      title: "Pizza",
      isSelected: false,
    },
    {
      emoji: "🍝",
      title: "Pasta",
      isSelected: false,
    },
    {
      emoji: "🇮🇹",
      title: "Italian",
      isSelected: false,
    },
    {
      title: "Dessert",
      isSelected: false,
    },
    {
      emoji: "🥕",
      title: "Healthy",
      isSelected: false,
    },
    {
      emoji: "🍔",
      title: "Cheat meal",
      isSelected: false,
    },
    {
      emoji: "😺",
      title: "Garfield",
      isSelected: false,
    },
    {
      title: "Belgian",
      isSelected: false,
    },
    {
      title: "Mexican",
      isSelected: false,
    },
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header>
        <Title>My Meals</Title>
        <SearchBarWithFilter value={query} onChangeText={setQuery} />
      </Header>
      {/* <View>
        <FlatList
          data={getFilterTags()}
          renderItem={({ item }) => (
            <Tag
              emoji={item.emoji}
              title={item.title}
              selected={isTagSelected(item.title)}
              onPress={() => handleTagPress(item.title)}
            />
          )}
          horizontal
          contentContainerStyle={{ gap: 10, marginVertical: 10, paddingHorizontal: 10 }}
        />
      </View> */}
      <TagList />
      <FlatList
        ref={flatListRef}
        data={getFilteredMeals()}
        renderItem={renderMeal}
        ListEmptyComponent={<EmptyState title="No Meal Found" subtitle="Whoops!" />}
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
