import { Text, StyleSheet, StyleProp, TextStyle, TextProps } from "react-native";

import { SearchValue, useHighlightText } from "./HighlightText.hooks";
import { colors } from "@/constants/colors";

export interface HighlightTextProps extends TextProps {
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  text?: string;
  searchValue?: SearchValue;
  allowSpacesBetweenCharacters?: boolean;
  caseSensitive?: boolean;
  ignoreAccents?: boolean;
}

const HighlightText = ({
  textStyle,
  highlightStyle,
  text,
  searchValue,
  allowSpacesBetweenCharacters,
  caseSensitive,
  ignoreAccents,
  ...props
}: HighlightTextProps) => {
  const { textSegments } = useHighlightText(text, searchValue, allowSpacesBetweenCharacters, caseSensitive, ignoreAccents);

  return (
    <Text style={textStyle} {...props}>
      {textSegments.map(({ text, highlight }, index) => (
        <Text key={index} style={highlight ? [styles.highlight, highlightStyle] : undefined}>
          {text}
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
