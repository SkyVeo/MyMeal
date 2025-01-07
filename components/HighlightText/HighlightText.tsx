import { Text, StyleSheet, StyleProp, TextStyle, TextProps } from "react-native";
import { findAll } from "highlight-words-core";

import { colors } from "@/constants/colors";
import { useMemo } from "react";
import { useHighlightText } from "./HighlightText.hooks";

export interface HighlightTextProps extends TextProps {
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  textToHighlight?: string;
  searchWords?: string[];
  caseSensitive?: boolean;
  autoEscape?: boolean;
  sanitize?: (text: string) => string;
}

const HighlightText = ({
  textStyle,
  highlightStyle,
  textToHighlight = "",
  searchWords,
  caseSensitive,
  autoEscape,
  sanitize,
  ...props
}: HighlightTextProps) => {
  const { chunks } = useHighlightText(textToHighlight, searchWords, caseSensitive, autoEscape, sanitize);

  return (
    <Text style={textStyle} {...props}>
      {chunks.map(({ start, end, highlight }, index) => (
        <Text key={index} style={highlight ? [styles.highlight, highlightStyle] : undefined}>
          {textToHighlight.slice(start, end)}
        </Text>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: colors.light.highlight,
    borderRadius: 4,
  },
});

export default HighlightText;
