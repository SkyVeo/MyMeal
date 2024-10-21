import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";

export default function Meal() {
  const [query, setQuery] = useState("");

  const data = [
    {
      id: 1,
      title: "Breakfast",
      description: "Start your day with a healthy breakfast",
    },
    {
      id: 2,
      title: "Lunch",
      description: "Enjoy a delicious lunch",
    },
    {
      id: 3,
      title: "Dinner",
      description: "",
    },
    {
      id: 4,
      title: "Snacks",
      description: "Healthy snacks for your cravings",
    },
    {
      id: 5,
      title: "Desserts",
      description: "Satisfy your sweet",
    },
  ];

  const getFilteredMeals = () => {
    return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            marginBottom: 24,
          }}
        >
          <Text style={{ color: colors.dark.text, fontSize: 24, fontFamily: "Poppins-Medium" }}>All Meals</Text>
        </View>

        <SearchInput placeholder="Search for a meal" value={query} onChangeText={(text) => setQuery(text)} />
      </View>

      <FlatList
        data={getFilteredMeals()}
        renderItem={({ item }) => <Text style={{ fontSize: 24, color: colors.dark.text }}>{item.title}</Text>}
        ListEmptyComponent={<EmptyState title="No Meal Found" subtitle="Whoops!" />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.dark.background,
  },
  headerContainer: {
    marginVertical: 24,
    paddingHorizontal: 16,
  },
});
