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
import Icon, { IconProps } from "../Icon";

export interface SearchBarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  searchIcon?: IconProps;
  cancelIcon?: IconProps;
  onClear?: () => void;
}

const ICON_SIZE = 20;

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
      <Icon name="search" size={ICON_SIZE} {...searchIcon} />
      <TextInput
        style={[styles.textInput, textInputStyle]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        returnKeyType="search"
        {...props}
      />
      {value && <TouchableOpacity onPress={handleClear}>
        <Icon name="cancel" size={ICON_SIZE} {...cancelIcon} />
      </TouchableOpacity>}
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
  },
});

export default SearchBar;
