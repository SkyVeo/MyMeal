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
  searchIconProps?: IconProps;
  cancelIconProps?: IconProps;
  onClear?: () => void;
}

const ICON_SIZE = 20;

const SearchBar = ({
  containerStyle,
  textInputStyle,
  searchIconProps,
  value,
  onChangeText,
  cancelIconProps,
  onClear,
  ...props
}: SearchBarProps) => {
  const handleClear = () => {
    onClear?.();
    onChangeText?.("");
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name="search" size={ICON_SIZE} {...searchIconProps} />
      <TextInput
        style={[styles.textInput, textInputStyle]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        returnKeyType="search"
        {...props}
      />
      {value && <TouchableOpacity onPress={handleClear}>
        <Icon name="cancel" size={ICON_SIZE} {...cancelIconProps} />
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
