import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import SearchBarIcon, { SearchBarIconProps } from "./SearchBarIcon";

export interface SearchBarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  searchIcon?: SearchBarIconProps["icon"];
  cancelIcon?: SearchBarIconProps["icon"];
  onClear?: () => void;
}

const SearchBar = ({
  containerStyle,
  textInputStyle,
  searchIcon,
  value,
  onChangeText,
  cancelIcon,
  onClear,
  ...props
}: SearchBarProps) => {
  const handleClear = () => {
    onClear?.();
    onChangeText?.("");
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <SearchBarIcon defaultName="search" size={20} icon={searchIcon} />
      <TextInput
        style={[styles.textInput, textInputStyle]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        returnKeyType="search"
        {...props}
      />
      <TouchableOpacity onPress={handleClear}>
        <SearchBarIcon defaultName="cancel" icon={value ? cancelIcon : false} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    includeFontPadding: false,
  },
});

export default SearchBar;
