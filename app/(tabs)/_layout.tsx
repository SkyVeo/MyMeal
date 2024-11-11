import { Tabs } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/colors";
import Icon, { IconKey } from "@/components/Icon";

interface TabIconProps {
  icon: IconKey;
  color: string;
  name: string;
  focused: boolean;
}

function TabIcon({ icon, color, name, focused }: TabIconProps) {
  return (
    <View style={styles.tabIconContainer}>
      <Icon name={icon} size={24} color={color} />
      <Text style={{ ...styles.tabIconText, fontFamily: focused ? "Poppins-Bold" : "Poppins-Regular", color: color }}>
        {name}
      </Text>
    </View>
  );
}

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
          tabBarIcon: ({ color, focused }) => <TabIcon icon="meal" color={color} name="My Meals" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "Shopping",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="shopping" color={color} name="Shopping List" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.dark.tabBar,
    // TODO
    // borderTopWidth: 0,
    // borderTopColor: colors.dark.border,
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
