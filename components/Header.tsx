import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { colors } from "@/constants/colors";
import Icon from "@/components/Icon";
import PopupMenu from "./PopupMenu";
import { SortOption } from "@/app/(tabs)";

const TOP_COLOR = "#fff";
const BOTTOM_COLOR = "#a0d6c8";

interface HeaderTopProps {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

function HeaderTop({ searchValue, setSearchValue }: HeaderTopProps) {
  const [isSearching, setIsSearching] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isSearching && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isSearching]);

  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
    if (isSearching && setSearchValue) {
      setSearchValue("");
    }
  };

  return (
    <View style={styles.topContainer}>
      {isSearching ? (
        <>
          <Icon name="back" size={24} color={TOP_COLOR} style={styles.containerElement} onPress={handleToggleSearch} />
          <TextInput
            ref={textInputRef}
            style={{ ...styles.textInput, ...styles.containerElement, paddingVertical: 0 }}
            placeholder="Search"
            placeholderTextColor={BOTTOM_COLOR}
            autoCapitalize="none"
            returnKeyType="search"
            value={searchValue}
            onChangeText={setSearchValue}
          />
          <Icon
            name="cancel"
            size={24}
            color={TOP_COLOR}
            style={styles.containerElement}
            onPress={() => setSearchValue?.("")}
          />
        </>
      ) : (
        <>
          <Text style={{ ...styles.topText, ...styles.containerElement, paddingLeft: 10 }}>All Meals</Text>
          <Icon
            name="search"
            size={20}
            color={TOP_COLOR}
            style={styles.containerElement}
            onPress={handleToggleSearch}
          />
        </>
      )}
      <Icon name="menu" size={24} color={TOP_COLOR} style={styles.containerElement} />
    </View>
  );
}

// ? rename props
interface HeaderProps {
  searchValue?: string;
  onChangeText?: (text: string) => void;
  sortText?: string;
  sortOptions?: { caption: string; value: SortOption }[];
  selectedSortOptionIndex?: number;
  onSetSortOption?: (option: SortOption) => void;
  isAscending?: boolean;
  onChangeSortOrder?: (isAscending: boolean) => void;
}

export default function Header({
  searchValue,
  onChangeText,
  sortText,
  sortOptions,
  selectedSortOptionIndex,
  onSetSortOption,
  isAscending,
  onChangeSortOrder,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.dark.background} />

      <HeaderTop searchValue={searchValue} setSearchValue={onChangeText} />

      <View style={styles.bottomContainer}>
        <PopupMenu
          style={[styles.bottomContainer, styles.containerElement]}
          items={sortOptions}
          selectedItemIndex={selectedSortOptionIndex}
          onPressItem={(item) => onSetSortOption?.(item.value)}
        >
          <Icon name="sort" size={20} color={BOTTOM_COLOR} />
          <Text style={{ ...styles.bottomText, marginLeft: 5 }}>{sortText}</Text>
        </PopupMenu>

        <Text style={{ ...styles.bottomText, ...styles.containerElement, color: styles.topText.color }}>|</Text>

        <Icon
          name={isAscending ? "arrowUp" : "arrowDown"}
          size={20}
          color={BOTTOM_COLOR}
          style={styles.containerElement}
          onPress={() => onChangeSortOrder?.(!isAscending)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.background,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    height: 40,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topText: {
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: TOP_COLOR,
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  bottomText: {
    includeFontPadding: false,
    textAlignVertical: "center",
    color: BOTTOM_COLOR,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  containerElement: {
    padding: 5,
  },
  textInput: {
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: TOP_COLOR,
    height: 40,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
});
