import { Text, StyleSheet, StyleProp, TextStyle, TextProps } from "react-native";
import { useHighlightText } from "./HighlightText.hooks";
import { colors } from "@/constants/colors";

export interface HighlightTextProps extends TextProps {
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
  ...props
}: HighlightTextProps) => {
  const { textSegments, highlightRegex } = useHighlightText(text, searchWords, ignoreTextSpaces, caseSensitive);

  const getTextStyle = (segment: string) =>
    highlightRegex && highlightRegex.test(segment) ? [styles.highlight, highlightStyle] : undefined;

  return (
    <Text style={textStyle} {...props}>
      {textSegments.map((segment: string, index: number) => (
        <Text key={index} style={getTextStyle(segment)}>
          {segment}
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
