import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

export interface HighlightTextProps {
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  text?: string;
  searchWords?: string[];
  ignoreTextSpaces?: boolean;
  caseSensitive?: boolean;
}

export function HighlightText({
  textStyle,
  highlightStyle,
  text = "",
  searchWords = [],
  ignoreTextSpaces = false,
  caseSensitive = false,
}: HighlightTextProps) {
  if (!searchWords.length) {
    return <Text style={textStyle}>{text}</Text>;
  }

  const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const createRegexPattern = () => {
    const processWord = (word: string) => {
      if (ignoreTextSpaces && word.length > 1) {
        return `${escapeRegExp(word[0])}${word
          .slice(1)
          .split("")
          .map((char) => `\\s*${escapeRegExp(char)}`)
          .join("")}`;
      }
      return escapeRegExp(word);
    };
    return `(${searchWords.map(processWord).join("|")})`;
  };

  const regex = new RegExp(createRegexPattern(), caseSensitive ? "g" : "gi");
  const parts = text.split(regex);

  return (
    <Text style={textStyle}>
      {parts.map((part: string, index: number) => {
        const isHighlighted = regex.test(part);
        return (
          <Text key={index} style={isHighlighted ? [styles.highlight, highlightStyle] : undefined}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
}

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: "#fff59d",
    borderRadius: 4,
  },
});
