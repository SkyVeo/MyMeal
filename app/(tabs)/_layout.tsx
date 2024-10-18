import { Tabs } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import React from "react";

import { colors } from "@/constants/colors";
import { icons } from "@/constants/icons";

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View style={styles.iconContainer}>
      {React.cloneElement(icon, { size: 24, color })}
      <Text style={{ fontFamily: focused ? "Roboto-Bold" : "Roboto-Regular", color: color }}>{name}</Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.dark.tabIconSelected,
        tabBarInactiveTintColor: colors.dark.tabIconDefault,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.meal} color={color} name="Meal" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "Shopping",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.shopping} color={color} name="Shopping" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: colors.dark.background,
    borderTopWidth: 1,
    borderTopColor: colors.dark.border,
    height: 64,
  },
});
