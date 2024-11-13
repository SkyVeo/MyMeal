import { useMemo } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { useHighlightText } from "./HighlightText.hooks";

export interface HighlightTextProps {
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  text?: string;
  searchWords?: string[];
  ignoreTextSpaces?: boolean;
  caseSensitive?: boolean;
}

const HighlightText = ({
  textStyle,
  highlightStyle,
  text = "",
  searchWords = [],
  ignoreTextSpaces = false,
  caseSensitive = false,
}: HighlightTextProps) => {
  const { parts, regex } = useMemo(
    () => useHighlightText(text, searchWords, ignoreTextSpaces, caseSensitive),
    [text, searchWords, ignoreTextSpaces, caseSensitive]
  );

  return (
    <Text style={textStyle}>
      {parts.map((part: string, index: number) => (
        <Text key={index} style={regex && regex.test(part) ? [styles.highlight, highlightStyle] : undefined}>
          {part}
        </Text>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: "#fff59d",
    borderRadius: 4,
  },
});

export default HighlightText;
