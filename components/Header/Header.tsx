import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../Icon";
import { globalStyles } from "@/constants/styles";
import SearchBar from "./SearchBar";

export interface HeaderProps {
  text?: string;
  onChangeText?: (text: string) => void;
}

const Header = ({ text, onChangeText }: HeaderProps) => {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <View style={styles.container}>
        <Text style={styles.title}>Recipe Search</Text>
        <SearchBar value={text} onChangeText={onChangeText} />
        <Icon style={styles.icon} name="search" size={24} color="black" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ececdd",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  title: {
    ...globalStyles.bold,
    fontSize: 25,
  },
  icon: {
    position: "absolute",
    right: 10,
  },
});

export default Header;
