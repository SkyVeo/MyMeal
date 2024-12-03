import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import Icon from "@/components/Icon";

const BOTTOM_COLOR = "#a0d6c8";

export interface SearchBarProps extends TextInputProps {
  onCancel?: () => void;
}

const SearchBar = ({ onChangeText, onCancel, ...props }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon name="back" size={24} style={styles.icon} onPress={onCancel} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={BOTTOM_COLOR}
        autoCapitalize="none"
        returnKeyType="search"
        onChangeText={onChangeText}
        autoFocus
        {...props}
      />
      <Icon name="cancel" size={24} style={styles.icon} onPress={() => onChangeText?.("")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  textInput: {
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  icon: {
    color: "#fff",
    padding: 5,
  },
});

export default SearchBar;
