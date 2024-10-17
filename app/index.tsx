import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyMeal!</Text>
      <StatusBar style="auto" />
      <Link href="/meal" style={{ color: "blue" }}>
        Go to Meal
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-BlackItalic",
  },
});
