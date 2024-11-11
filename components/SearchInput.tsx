import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import React from "react";

import { colors } from "@/constants/colors";
import Icon from "./Icon";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchInput({ placeholder, value, onChangeText }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleOnIconPress = () => {
    return value ? onChangeText && onChangeText("") : handleFocus();
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.dark.secondaryText}
        autoCapitalize="none"
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableOpacity onPress={handleOnIconPress}>
        {/* <Icon icon={value ? icons.cancel : icons.search} size={20} style={styles.icon} /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  // TODO remove this style
  title: {
    fontSize: 16,
    color: "#f3f4f6",
    fontFamily: "Poppins-Medium",
  },
  inputContainer: {
    marginRight: 16,
    borderWidth: 0,
    borderColor: colors.dark.border,
    width: "100%",
    height: 64,
    paddingHorizontal: 24,
    backgroundColor: colors.dark.tileBackground,
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainerFocused: {
    borderColor: colors.dark.tint,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: colors.dark.text,
    fontFamily: "Poppins-Regular",
    width: "100%",
    height: "100%",
  },
  icon: {
    color: colors.dark.icon,
  },
});
