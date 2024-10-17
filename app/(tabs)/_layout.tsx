import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import React from "react";
import { Icons } from "@/constants/Icon";

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      {React.cloneElement(icon, { size: 24, color })}
      <Text style={{ fontFamily: focused ? "Roboto-Bold" : "Roboto-Regular" }}>{name}</Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Icons.meal}
              color={color}
              name="Meal"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "Shopping",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Icons.shopping}
              color={color}
              name="Shopping"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
