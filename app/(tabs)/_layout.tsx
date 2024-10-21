import { Tabs } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import React, { ReactElement } from "react";

import { colors } from "@/constants/colors";
import { icons } from "@/constants/icons";
import Icon from "@/components/Icon";

interface TabIconProps {
  icon: ReactElement;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View style={styles.tabIconContainer}>
      <Icon icon={icon} size={24} style={{ color }} />
      <Text style={{ ...styles.tabIconText, fontFamily: focused ? "Poppins-Bold" : "Poppins-Regular", color: color }}>
        {name}
      </Text>
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
        name="index"
        options={{
          title: "Meal",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.meal} color={color} name="My Meals" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "Shopping",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.shopping} color={color} name="Shopping List" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.dark.background,
    borderTopWidth: 1,
    borderTopColor: colors.dark.border,
    height: 64,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconText: {
    fontSize: 12,
  },
});
